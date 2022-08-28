const {
  createPlacePayment,
  readOnePlacePayment,
  readAllPlacePayment,
  updatePlacePayment,
  deletePlacePayment,
  readOnePlacePaymentByName
} = require("../services/placePaymentServices");

class PlacePaymentController {
  static async create(request, response) {
    try {
      const { bankName, status, deletedAt, BookingId } = request.body;

      const dataPlacePayment = {
        id,
        bankName,
        deletedAt,
        status,
        BookingId
      };

      const newPlacePayment = await createPlacePayment(dataPlacePayment);

      response.status(200).json({
        statusCode: 200,
        message: "Create Place Payment Successfully",
        data: newPlacePayment
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
        message
      });
    }
  }

  static async list(request, response) {
    try {
      const findAllPlacePayment = await readAllPlacePayment();

      if (findAllPlacePayment <= 0) {
        throw new Error("PLACE_PAYMENT_IS_EMPTY");
      }

      response.status(200).json({
        statusCode: 200,
        message: "Place Payment found",
        data: findAllPlacePayment
      });
    } catch (err) {
      let code = 500;
      let message = "Internal Server Error";

      if (err.message === "PLACE_PAYMENT_IS_EMPTY") {
        code = 400;
        message = "Data Place Payment Is Empty";
      }
      response.status(code).json({
        statusCode: code,
        message
      });
    }
  }

  static async update(request, response) {
    try {
      const PlacePaymentId = request.params.id;
      const { bankName, status, deletedAt, BookingId } = request.body;

      const updateData = {
        bankName,
        status,
        deletedAt,
        BookingId
      };
      const updatedPlacePayment = await updatePlacePayment(
        updateData,
        PlacePaymentId
      );
      response.status(200).json({
        statusCode: 200,
        message: "Place Payment updated successfully",
        data: updatedPlacePayment
      });
    } catch (err) {
      let code = 500;
      let message = "Internal Server Error";

      if (err.name === "SequelizeValidationError") {
        code = 400;
        message = "Bad Request";
      } else if (err.message === "PLACE_PAYMENT_NOT_FOUND") {
        code = 404;
        message = "Place Payment not found";
      }

      response.status(code).json({
        statusCode: code,
        error: {
          message: message
        }
      });
    }
  }

  static async delete(request, response) {
    try {
      const PlacePaymentId = request.params.id;
      const deletedPlacePayment = await deletePlacePayment(PlacePaymentId);

      if (deletedPlacePayment <= 0) {
        throw new Error("PLACE_PAYMENT_NOT_FOUND");
      }
      response.status(200).json({
        statusCode: 200,
        message: `Place Payment deleted successfully`,
        data: deletedPlacePayment
      });
    } catch (err) {
      let code = 500;
      let message = "Internal Server Error";

      if (err.message === "PLACE_PAYMENT_NOT_FOUND") {
        code = 404;
        message = "Place Payment not found";
      }

      response.status(code).json({
        statusCode: code,
        error: {
          message: message
        }
      });
    }
  }

  static async search(request, response) {
    try {
      const PlacePaymentId = request.params.id;

      const findPlacePayment = await readOnePlacePayment(PlacePaymentId);

      if (findPlacePayment <= 0) {
        throw new Error("PLACE_PAYMENT_NOT_FOUND");
      }

      response.status(200).json({
        statusCode: 200,
        message: "Data Place Payment Found",
        data: findPlacePayment
      });
    } catch (err) {
      let code = 500;
      let message = "Internal Server Error";

      if (err.message === "PLACE_PAYMENT_NOT_FOUND") {
        code = 400;
        message = "Place Payment Not Found";
      }

      response.status(code).json({
        statusCode: code,
        message
      });
    }
  }

  static async searchByName(request, response) {
    try {
      const { name } = request.body;

      const findPlacePayment = await readOnePlacePaymentByName(name);

      if (findPlacePayment <= 0) {
        throw new Error("PLACE_PAYMENT_NOT_FOUND");
      }

      response.status(200).json({
        statusCode: 200,
        message: "Data Place Payment Found",
        data: findPlacePayment
      });
    } catch (err) {
      let code = 500;
      let message = "Internal Server Error";

      if (err.message === "PLACE_PAYMENT_NOT_FOUND") {
        code = 400;
        message = "Place Payment Not Found";
      }

      response.status(code).json({
        statusCode: code,
        message
      });
    }
  }
}

module.exports = PlacePaymentController;
