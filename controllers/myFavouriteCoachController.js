const {
  createMyFavouriteCoach,
  deleteMyFavouriteCoach,
  updateMyFavouriteCoach,
  readOneMyFavouriteCoach,
  readAllMyFavouriteCoach,
  readOneMyFavouriteCoachByName,
  readAllMyFavouriteCoachByFavourite,
} = require("../services/myFavouriteCoachServices");
class myFavouriteCoachController {
  static async create(request, response) {
    try {
      const { favourite } = request.body;

      const dataMyCoach = {
        favourite,
      };

      newMyCoach = await createMyFavouriteCoach(dataMyCoach);
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
      const findAllMyFavouriteCoach = await readAllMyFavouriteCoach();
      if (findAllMyFavouriteCoach <= 0) {
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

  static async listFavourite(request, response) {
    try {
      const findAllMyFavouriteCoach =
        await readAllMyFavouriteCoachByFavourite();
      if (findAllMyFavouriteCoach <= 0) {
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
      const myFavouriteCoachId = request.params.id;
      const { favourite } = request.body;

      const updateData = {
        favourite,
      };

      const updatedMyFavouriteCoach = await updateMyFavouriteCoach(
        updateData,
        myFavouriteCoachId
      );
      response.status(200).json({
        statusCode: 200,
        message: "My Coach updated Successfully",
        data: updatedMyFavouriteCoach,
      });
    } catch (err) {
      let code = 500;
      let message = "Internal Server Error";

      if (err.name === "SequelizeValidationError") {
        code = 400;
        message = "Bad Request";
      } else if (err.message === "MY_COACH_NOT_FOUND") {
        code = 404;
        message = "My Coach not found";
      }

      response.status(code).json({
        statusCode: code,
        message,
      });
    }
  }

  static async delete(response) {
    try {
      const myFavouriteCoachId = request.params.id;
      const deletedMyFavouriteCoach = await deleteMyFavouriteCoach(
        myFavouriteCoachId
      );
      if (deletedMyFavouriteCoach < 0) {
        throw new Error("MY_COACH_NOT_FOUND");
      }

      response.status(200).json({
        statusCode: 200,
        message: "My Coach deleted Successfully",
        data: deletedMyFavouriteCoach,
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
      const myFavouriteCoachId = request.params.id;

      const findMyFavouriteCoach = await readOneMyFavouriteCoach(
        myFavouriteCoachId
      );
      if (findMyFavouriteCoach <= 0) {
        throw new Error("MY_COACH_NOT_FOUND");
      }

      response.status(200).json({
        statusCode: 200,
        message: "My Coach found",
        data: findMyFavouriteCoach,
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

  static async searchByName(request, response) {
    try {
      const { name } = request.body;

      const findMyFavouriteCoach = await readOneMyFavouriteCoachByName(name);
      if (findMyFavouriteCoach <= 0) {
        throw new Error("MY_COACH_NOT_FOUND");
      }

      response.status(200).json({
        statusCode: 200,
        message: "My Coach found",
        data: findMyFavouriteCoach,
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

module.exports = myFavouriteCoachController;
