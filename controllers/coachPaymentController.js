const {
  createCoachPayment,
  readOneCoachPayment,
  readAllCoachPayment,
  updateCoachPayment,
  deleteCoachPayment,
  readOneCoachPaymentByName
} = require("../services/coachPaymentServices");

class CoachPaymentController {
  static async create(request, response) {
    try {
      const { bankName, deletedAt, status, MyCoachId } = request.body;

      const dataCoachPayment = {
        id,
        bankName,
        deletedAt,
        status,
        MyCoachId
      };

      const newCoachPayment = await createCoachPayment(dataCoachPayment);

      response.status(200).json({
        statusCode: 200,
        message: "Create Coach Payment Successfully",
        data: newCoachPayment
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
      const findAllCoachPayment = await readAllCoachPayment();

      if (findAllCoachPayment <= 0) {
        throw new Error("COACH_PAYMENT_IS_EMPTY");
      }

      response.status(200).json({
        statusCode: 200,
        message: "Coach Payment found",
        data: findAllCoachPayment
      });
    } catch (err) {
      let code = 500;
      let message = "Internal Server Error";

      if (err.message === "COACH_PAYMENT_IS_EMPTY") {
        code = 400;
        message = "Data Coach Payment Is Empty";
      }
      response.status(code).json({
        statusCode: code,
        message
      });
    }
  }

  static async update(request, response) {
    try {
      const CoachPaymentId = request.params.id;
      const { bankName, deletedAt, status, MyCoachId } = request.body;

      const updateData = {
        bankName,
        deletedAt,
        status,
        MyCoachId
      };
      const updatedCoachPayment = await updateCoachPayment(
        updateData,
        CoachPaymentId
      );
      response.status(200).json({
        statusCode: 200,
        message: "Payment Coach updated successfully",
        data: updatedCoachPayment
      });
    } catch (err) {
      let code = 500;
      let message = "Internal Server Error";

      if (err.name === "SequelizeValidationError") {
        code = 400;
        message = "Bad Request";
      } else if (err.message === "COACH_PAYMENT_NOT_FOUND") {
        code = 404;
        message = "Coach Payment not found";
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
      const coachPaymentId = request.params.id;
      const deletedCoachPayment = await deleteCoachPayment(coachPaymentId);

      if (deletedCoachPayment <= 0) {
        throw new Error("COACH_PAYMENT_NOT_FOUND");
      }
      response.status(200).json({
        statusCode: 200,
        message: `Coach Payment deleted successfully`,
        data: deletedCoachPayment
      });
    } catch (err) {
      let code = 500;
      let message = "Internal Server Error";

      if (err.message === "COACH_PAYMENT_NOT_FOUND") {
        code = 404;
        message = "Coach Payment not found";
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
      const coachPaymentId = request.params.id;

      const findCoachPayment = await readOneCoachPayment(coachPaymentId);

      if (findCoachPayment <= 0) {
        throw new Error("COACH_PAYMENT_NOT_FOUND");
      }

      response.status(200).json({
        statusCode: 200,
        message: "Data Payment Coach Found",
        data: findCoachPayment
      });
    } catch (err) {
      let code = 500;
      let message = "Internal Server Error";

      if (err.message === "COACH_PAYMENT_NOT_FOUND") {
        code = 400;
        message = "Coach Payment Not Found";
      }

      response.status(code).json({
        statusCode: code,
        message
      });
    }
  }

  static async searchByUserId(request, response) {
    try {
      const { MyCoachId } = request.body;

      const findCoachPayment = await readOneCoachPaymentByName(MyCoachId);

      if (findCoachPayment <= 0) {
        throw new Error("COACH_PAYMENT_NOT_FOUND");
      }

      response.status(200).json({
        statusCode: 200,
        message: "Data Coach Payment Found",
        data: findCoachPayment
      });
    } catch (err) {
      let code = 500;
      let message = "Internal Server Error";

      if (err.message === "COACH_PAYMENT_NOT_FOUND") {
        code = 400;
        message = "Coach Payment Not Found";
      }

      response.status(code).json({
        statusCode: code,
        message
      });
    }
  }
}

module.exports = CoachPaymentController;
