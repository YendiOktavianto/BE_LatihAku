const {
  createBooking,
  readOneBooking,
  readAllBooking,
  updateBooking,
  deleteBooking,
} = require("../services/bookingServices");

class bookingController {
  static create(request, response) {
    try {
      const { bookingDate, notes } = request.body;

      const dataBooking = {
        bookingDate,
        notes,
      };

      const newBooking = createBooking(dataBooking);
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
      const findAllBooking = readAllBooking();
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

      const updatedData = "";
      const oldBooking = readOneBooking(bookingId);
      if (oldBooking <= 0) {
        throw new Error("BOOKING_NOT_FOUND");
      } else {
        updatedData = updateBooking(updateData);
      }

      response.status(200).json({
        statusCode: 200,
        message: "Data Booking updated successfully",
        data: updatedData,
      });
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
      const deletedBooking = deleteBooking(bookingId);

      if (deleteBooking <= 0) {
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
}
