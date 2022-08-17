const {
  createPaymentCoach,
  readOnePaymentCoach,
  readAllPaymentCoach,
  updatePaymentCoach,
  deletePaymentCoach,
  readOnePaymentCoachByName,
} = require("../services/paymentCoachServices");

class paymentCoachController {
  static async create(request, response) {
    try {
      const { name } = request.body;

      const image = request.file.path;

      const dataPaymentCoach = {
        name,
        image,
      };

      const newPaymentCoach = await createPaymentCoach(dataPaymentCoach);

      response.status(200).json({
        statusCode: 200,
        message: "Create paymentCoach Successfully",
        data: newPaymentCoach,
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
      const findAllPaymentCoach = await readAllPaymentCoach();

      if (findAllPaymentCoach <= 0) {
        throw new Error("PAYMENT_COACH_IS_EMPTY");
      }

      response.status(200).json({
        statusCode: 200,
        message: "Payment Coach found",
        data: findAllPaymentCoach,
      });
    } catch (err) {
      let code = 500;
      let message = "Internal Server Error";

      if (err.message === "PAYMENT_COACH_IS_EMPTY") {
        code = 400;
        message = "Data Payment Coach Is Empty";
      }
      response.status(code).json({
        statusCode: code,
        message,
      });
    }
  }

  static async update(request, response) {
    try {
      const paymentCoachId = request.params.id;
      const { name } = request.body;
      const image = request.file.path;

      const updateData = {
        name,
        image,
      };
      const updatedPaymentCoach = await updatePaymentCoach(
        updateData,
        paymentCoachId
      );
      response.status(200).json({
        statusCode: 200,
        message: "Payment Coach updated successfully",
        data: updatedPaymentCoach,
      });
    } catch (err) {
      let code = 500;
      let message = "Internal Server Error";

      if (err.name === "SequelizeValidationError") {
        code = 400;
        message = "Bad Request";
      } else if (err.message === "PAYMENT_COACH_NOT_FOUND") {
        code = 404;
        message = "Payment Coach not found";
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
      const paymentCoachId = request.params.id;
      const deletedPaymentCoach = await deletePaymentCoach(paymentCoachId);

      if (deletedPaymentCoach <= 0) {
        throw new Error("PAYMENT_COACH_NOT_FOUND");
      }
      response.status(200).json({
        statusCode: 200,
        message: `Payment Coach deleted successfully`,
        data: deletedPaymentCoach,
      });
    } catch (err) {
      let code = 500;
      let message = "Internal Server Error";

      if (err.message === "PAYMENT_COACH_NOT_FOUND") {
        code = 404;
        message = "Payment Coach not found";
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
      const paymentCoachId = request.params.id;

      const findPaymentCoach = await readOnePaymentCoach(paymentCoachId);

      if (findPaymentCoach <= 0) {
        throw new Error("PAYMENT_COACH_NOT_FOUND");
      }

      response.status(200).json({
        statusCode: 200,
        message: "Data Payment Coach Found",
        data: findPaymentCoach,
      });
    } catch (err) {
      let code = 500;
      let message = "Internal Server Error";

      if (err.message === "PAYMENT_COACH_NOT_FOUND") {
        code = 400;
        message = "Payment Coach Not Found";
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

      const findPaymentCoach = await readOnePaymentCoachByName(name);

      if (findPaymentCoach <= 0) {
        throw new Error("PAYMENT_COACH_NOT_FOUND");
      }

      response.status(200).json({
        statusCode: 200,
        message: "Data paymentCoach Found",
        data: findPaymentCoach,
      });
    } catch (err) {
      let code = 500;
      let message = "Internal Server Error";

      if (err.message === "paymentCoach_NOT_FOUND") {
        code = 400;
        message = "Payment Coach Not Found";
      }

      response.status(code).json({
        statusCode: code,
        message,
      });
    }
  }
}

module.exports = paymentCoachController;
