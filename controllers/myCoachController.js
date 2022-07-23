const {
  createMyCoach,
  deleteMyCoach,
  updateMyCoach,
  readOneMyCoach,
  readAllMyCoach,
} = require("../services/myCoachServices");
class myCoachController {
  static async create(request, response) {
    try {
      const { schedule, timeRemaining, salary } = request.body;

      const dataMyCoach = {
        schedule,
        timeRemaining,
        salary,
      };

      newMyCoach = await createMyCoach(dataMyCoach);
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

  static async list(request, response) {
    try {
      const findAllMyCoach = await readAllMyCoach();
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

  static async update(request, response) {
    try {
      const myCoachId = request.params.id;
      const { schedule, timeRemaining, salary } = request.body;

      const updateData = {
        schedule,
        timeRemaining,
        salary,
      };

      const updatedMyCoach = await updateMyCoach(updateData, myCoachId);
      response.status(200).json({
        statusCode: 200,
        message: "My Coach updated Successfully",
        data: updatedMyCoach,
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

  static async delete(response) {
    try {
      const myCoachId = request.params.id;
      const deletedMyCoach = await deleteMyCoach(myCoachId);
      if (deletedMyCoach < 0) {
        throw new Error("MY_COACH_NOT_FOUND");
      }

      response.status(200).json({
        statusCode: 200,
        message: "My Coach deleted Successfully",
        data: deletedMyCoach,
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

  static async search(request, response) {
    try {
      const myCoachId = request.params.id;

      const findMyCoach = await readOneMyCoach(myCoachId);
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
