const {
  createBooking,
  readOneBooking,
  readAllBooking,
  updateBooking,
  deleteBooking,
} = require("../services/bookingServices");

class bookingController {
  static async create(request, response) {
    try {
      const { bookingDate, notes } = request.body;

      const dataBooking = {
        bookingDate,
        notes,
      };

      const newBooking = await createBooking(dataBooking);

      response.status(200).json({
        statusCode: 200,
        message: "Create Booking Successfully",
        data: newBooking,
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

  static list(request, response) {
    try {
      const findAllBooking = await readAllBooking();
      if (findAllBooking <= 0) {
        throw new Error("BOOKING_IS_EMPTY");
      }

      response.status(200).json({
        statusCode: 200,
        message: "Booking found",
        data: findAllBooking,
      });
    } catch (err) {
      let code = 500;
      let message = "Internal Server Error";

      if (err.message === "BOOKING_IS_EMPTY") {
        code = 400;
        message = "Data Booking Is Empty";
      }
      response.status(code).json({
        statusCode: code,
        message,
      });
    }
  }

  static update(request, response) {
    try {
      const bookingId = request.params.id;
      const { bookingDate, notes } = request.body;

      const updateData = {
        bookingDate,
        notes,
      };

      const unUpdatedBooking = await readOneBooking(bookingId);

      if (unUpdatedBooking <= 0) {
        throw new Error("BOOKING_NOT_FOUND");
      } else {
        const updatedBooking = await updateBooking(updateData);
        response.status(200).json({
          statusCode: 200,
          message: "Data Booking updated successfully",
          data: updatedBooking,
        });
      }
    } catch (error) {
      let code = 500;
      let msg = "Internal Server Error";

      if (err.name === "SequelizeValidationError") {
        code = 400;
        msg = "Bad Request";
      } else if (err.message === "BOOKING_NOT_FOUND") {
        code = 404;
        msg = "Booking Not Found";
      }

      response.status(code).json({
        statusCode: code,
        error: {
          message: msg,
        },
      });
    }
  }

  static delete(request, response) {
    try {
      const bookingId = request.params.id;

      const deletedBooking = await deleteBooking(bookingId);

      if (deletedBooking <= 0) {
        throw new Error("BOOKING_NOT_FOUND");
      }

      response.status(200).json({
        statusCode: 200,
        message: `Data Booking deleted successfully`,
        data: deletedBooking,
      });
    } catch (err) {
      let code = 500;
      let msg = "Internal Server Error";

      if (err.message === "BOOKING_NOT_FOUND") {
        code = 404;
        msg = "Data Booking Not Found";
      }

      response.status(code).json({
        statusCode: code,
        error: {
          message: msg,
        },
      });
    }
  }

  static search(request, response) {
    try {
      const bookingId = request.params.id;
      const findBooking = await readOneBooking(bookingId);

      if (findBooking <= 0) {
        throw new Error("BOOKING_NOT_FOUND");
      }

      response.status(200).json({
        statusCode: 200,
        message: "Data Booking Found",
        data: findBooking,
      });
    } catch (err) {
      let code = 500;
      let message = "Internal Server Error";

      if (err.message === "BOOKING_NOT_FOUND") {
        code = 400;
        message = "Category Not Found";
      }

      response.status(code).json({
        statusCode: code,
        message,
      });
    }
  }
}

module.exports = bookingController;
