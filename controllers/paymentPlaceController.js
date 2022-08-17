const {
  createPaymentPlace,
  readOnePaymentPlace,
  readAllPaymentPlace,
  updatePaymentPlace,
  deletePaymentPlace,
  readOnePaymentPlaceByName,
} = require("../services/paymentPlaceServices");

class paymentPlaceController {
  static async create(request, response) {
    try {
      const { name } = request.body;

      const image = request.file.path;

      const dataPaymentPlace = {
        name,
        image,
      };

      const newPaymentPlace = await createPaymentPlace(dataPaymentPlace);

      response.status(200).json({
        statusCode: 200,
        message: "Create Payment Place Successfully",
        data: newPaymentPlace,
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
      const findAllPaymentPlace = await readAllPaymentPlace();

      if (findAllPaymentPlace <= 0) {
        throw new Error("PAYMENT_PLACE_IS_EMPTY");
      }

      response.status(200).json({
        statusCode: 200,
        message: "PaymentPlace found",
        data: findAllPaymentPlace,
      });
    } catch (err) {
      let code = 500;
      let message = "Internal Server Error";

      if (err.message === "PAYMENT_PLACE_IS_EMPTY") {
        code = 400;
        message = "Data Payment Place Is Empty";
      }
      response.status(code).json({
        statusCode: code,
        message,
      });
    }
  }

  static async update(request, response) {
    try {
      const PaymentPlaceId = request.params.id;
      const { name } = request.body;
      const image = request.file.path;

      const updateData = {
        name,
        image,
      };
      const updatedPaymentPlace = await updatePaymentPlace(
        updateData,
        PaymentPlaceId
      );
      response.status(200).json({
        statusCode: 200,
        message: "Payment Place updated successfully",
        data: updatedPaymentPlace,
      });
    } catch (err) {
      let code = 500;
      let message = "Internal Server Error";

      if (err.name === "SequelizeValidationError") {
        code = 400;
        message = "Bad Request";
      } else if (err.message === "PAYMENT_PLACE_NOT_FOUND") {
        code = 404;
        message = "Payment Place not found";
      }

      response.status(code).json({
        statusCode: code,
        error: {
          message: message,
        },
      });
    }
  }

  static async delete(request, response) {
    try {
      const PaymentPlaceId = request.params.id;
      const deletedPaymentPlace = await deletePaymentPlace(PaymentPlaceId);

      if (deletedPaymentPlace <= 0) {
        throw new Error("PAYMENT_PLACE_NOT_FOUND");
      }
      response.status(200).json({
        statusCode: 200,
        message: `Payment Place deleted successfully`,
        data: deletedPaymentPlace,
      });
    } catch (err) {
      let code = 500;
      let message = "Internal Server Error";

      if (err.message === "PAYMENT_PLACE_NOT_FOUND") {
        code = 404;
        message = "Payment Place not found";
      }

      response.status(code).json({
        statusCode: code,
        error: {
          message: message,
        },
      });
    }
  }

  static async search(request, response) {
    try {
      const PaymentPlaceId = request.params.id;

      const findPaymentPlace = await readOnePaymentPlace(PaymentPlaceId);

      if (findPaymentPlace <= 0) {
        throw new Error("PAYMENT_PLACE_NOT_FOUND");
      }

      response.status(200).json({
        statusCode: 200,
        message: "Data Payment Place Found",
        data: findPaymentPlace,
      });
    } catch (err) {
      let code = 500;
      let message = "Internal Server Error";

      if (err.message === "PAYMENT_PLACE_NOT_FOUND") {
        code = 400;
        message = "Payment Place Not Found";
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

      const findPaymentPlace = await readOnePaymentPlaceByName(name);

      if (findPaymentPlace <= 0) {
        throw new Error("PAYMENT_PLACE_NOT_FOUND");
      }

      response.status(200).json({
        statusCode: 200,
        message: "Data Payment Place Found",
        data: findPaymentPlace,
      });
    } catch (err) {
      let code = 500;
      let message = "Internal Server Error";

      if (err.message === "PAYMENT_PLACE_NOT_FOUND") {
        code = 400;
        message = "Payment Place Not Found";
      }

      response.status(code).json({
        statusCode: code,
        message,
      });
    }
  }
}

module.exports = paymentPlaceController;
