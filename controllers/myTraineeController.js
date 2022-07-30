const {
  createMyTrainee,
  deleteMyTrainee,
  updateMyTrainee,
  readOneMyTrainee,
  readAllMyTrainee,
  readOneMyTraineeByName,
} = require("../services/myTraineeServices");
class myTraineeController {
  static async create(request, response) {
    try {
      const { schedule, timeRemaining, salary } = request.body;

      const dataMyTrainee = {
        schedule,
        timeRemaining,
        salary,
      };

      newMyTrainee = await createMyTrainee(dataMyTrainee);
      response.status(200).json({
        statusCode: 200,
        message: "Create MyCocach Successfully",
        data: newMyTrainee,
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
      const findAllMyTrainee = await readAllMyTrainee();
      if (findAllMyTrainee <= 0) {
        throw new Error("MY_Trainee_IS_EMPTY");
      }
      response.status(200).json({
        statusCode: 200,
        message: "My Trainee found",
        data: findAllMyTrainee,
      });
    } catch (err) {
      let code = 500;
      let message = "Internal Server Error";

      if (err.message === "MY_Trainee_IS_EMPTY") {
        code = 400;
        message = "Data My Trainee is Empty";
      }
      response.status(code).json({
        statusCode: code,
        message,
      });
    }
  }

  static async update(request, response) {
    try {
      const myTraineeId = request.params.id;
      const { schedule, timeRemaining, salary } = request.body;

      const updateData = {
        schedule,
        timeRemaining,
        salary,
      };

      const updatedMyTrainee = await updateMyTrainee(updateData, myTraineeId);
      response.status(200).json({
        statusCode: 200,
        message: "My Trainee updated Successfully",
        data: updatedMyTrainee,
      });
    } catch (err) {
      let code = 500;
      let message = "Internal Server Error";

      if (err.name === "SequelizeValidationError") {
        code = 400;
        message = "Bad Request";
      } else if (err.message === "MY_Trainee_NOT_FOUND") {
        code = 404;
        message = "My Trainee not found";
      }

      response.status(code).json({
        statusCode: code,
        message,
      });
    }
  }

  static async delete(response) {
    try {
      const myTraineeId = request.params.id;
      const deletedMyTrainee = await deleteMyTrainee(myTraineeId);
      if (deletedMyTrainee < 0) {
        throw new Error("MY_Trainee_NOT_FOUND");
      }

      response.status(200).json({
        statusCode: 200,
        message: "My Trainee deleted Successfully",
        data: deletedMyTrainee,
      });
    } catch (err) {
      let code = 500;
      let message = "Internal Server Error";

      if (err.message === "MY_Trainee_NOT_FOUND") {
        code = 400;
        message = "My Trainee not Found";
      }

      response.status(code).json({
        statusCode: code,
        message,
      });
    }
  }

  static async search(request, response) {
    try {
      const myTraineeId = request.params.id;

      const findMyTrainee = await readOneMyTrainee(myTraineeId);
      if (findMyTrainee <= 0) {
        throw new Error("MY_Trainee_NOT_FOUND");
      }

      response.status(200).json({
        statusCode: 200,
        message: "My Trainee found",
        data: findMyTrainee,
      });
    } catch (err) {
      let code = 500;
      let message = "Internal Server Error";

      if (err.message === "MY_Trainee_NOT_FOUND") {
        code = 400;
        message = "My Trainee Not Found";
      }

      response.status(code).json({
        statusCode: code,
        message,
      });
    }
  }

  static async searchByName(request, response) {
    try {
      const { name } = request.body;

      const findMyTrainee = await readOneMyTraineeByName(name);
      if (findMyTrainee <= 0) {
        throw new Error("MY_Trainee_NOT_FOUND");
      }

      response.status(200).json({
        statusCode: 200,
        message: "My Trainee found",
        data: findMyTrainee,
      });
    } catch (err) {
      let code = 500;
      let message = "Internal Server Error";

      if (err.message === "MY_Trainee_NOT_FOUND") {
        code = 400;
        message = "My Trainee Not Found";
      }

      response.status(code).json({
        statusCode: code,
        message,
      });
    }
  }
}

module.exports = myTraineeController;
