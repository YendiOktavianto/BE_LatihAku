const {
  createMyCoach,
  deleteMyCoach,
  updateMyCoach,
  readOneMyCoach,
  readAllMyCoach,
} = require("../services/myCoachServices");
class myCoachController {
  static create(request, response) {
    try {
      // const { schedule, timeRemaining, salary } = request.body;

      // const dataMyCoach = {
      //   schedule,
      //   timeRemaining,
      //   salary,
      // };

      const newMyCoach = createMyCoach(dataMyCoach);
      //createMyCoach(dataMyCoach);
      response.status(200).json({
        statusCode: 200,
        message: "Create MyCocach Successfully",
        data: newMyCoach,
      });
    } catch (err) {
      let code = 500;
      let message = "Internal Server Error";

      if (err.message === "SequelizeValidationError") {
        code = 400;
        message = "Bad Request";
      }

      response.status(code).json({
        statusCode: code,
        message,
      });
    }
  }

  static list(response) {
    try {
      const findAllMyCoach = readAllMyCoach();
      if (findAllMyCoach <= 0) {
        throw new Error("MY_COACH_IS_EMPTY");
      }
      response.status(200).json({
        statusCode: 200,
        message: "My Coach found",
        data: findAllMyCoach,
      });
    } catch (err) {
      let code = 500;
      let message = "Internal Server Error";

      if (err.message === "MY_COACH_IS_EMPTY") {
        code = 400;
        message = "Data My Coach is Empty";
      }
      response.status(code).json({
        statusCode: code,
        message,
      });
    }
  }

  static update(request, response) {
    try {
      const myCoachId = request.params.id;
      const {
        name,
        owner,
        price,
        location,
        rating,
        description,
        favourite,
        images,
        phone,
        comments,
      } = request.body;

      const updateData = {
        name,
        owner,
        price,
        location,
        rating,
        description,
        favourite,
        images,
        phone,
        comments,
      };

      const updatedData = "";
      const oldMyCoach = FindMyCoach(myCoachId);
      if (oldMyCoach < 0) {
        throw new Error("MY_COACH_NOT_FOUND");
      } else {
        updatedData = updateMyCoach(updateData);
      }

      response.status(200).json({
        statusCode: 200,
        message: "My Coach updated Successfully",
        data: updatedData,
      });
    } catch (err) {
      let code = 500;
      let message = "Internal Server Error";

      if (err.name === "SequelizeValidationError") {
        code = 400;
        msg = "Bad Request";
      } else if (err.message === "MY_COACH_NOT_FOUND") {
        code = 404;
        msg = "My Coach not found";
      }

      response.status(code).json({
        statusCode: code,
        message,
      });
    }
  }

  static delete(response) {
    try {
      const myCoachId = request.params.id;
      const deletedMyCoach = deleteMyCoach(myCoachId);

      if (deletedMyCoach < 0) {
        throw new Error("MY_COACH_NOT_FOUND");
      }

      response.status(200).json({
        statusCode: 200,
        message: "My Coach deleted Successfully",
      });
    } catch (err) {
      let code = 500;
      let message = "Internal Server Error";

      if (err.message === "MY_COACH_NOT_FOUND") {
        code = 400;
        message = "My Coach not Found";
      }

      response.status(code).json({
        statusCode: code,
        message,
      });
    }
  }

  static search(request, response) {
    try {
      const myCoachId = request.params.id;

      const findMyCoach = readOneMyCoach(myCoachId);
      if (findMyCoach <= 0) {
        throw new Error("MY_COACH_NOT_FOUND");
      }

      response.status(200).json({
        statusCode: 200,
        message: "My Coach found",
        data: findMyCoach,
      });
    } catch (err) {
      let code = 500;
      let message = "Internal Server Error";

      if (err.message === "MY_COACH_NOT_FOUND") {
        code = 400;
        message = "My Coach Not Found";
      }

      response.status(code).json({
        statusCode: code,
        message,
      });
    }
  }
}

module.exports = myCoachController;
