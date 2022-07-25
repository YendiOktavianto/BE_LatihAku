const express = require("express");
const routesBooking = express.Router();
const bookingController = require("../controllers/bookingController");
const { verifyToken } = require("../helper/jwt");
const { uploadImage } = require("../helper/uploadImage");
const validate = require("../middlewares/validate");
const bookingValidation = require("../validations/bookingValidation");
//booking
routesBooking.post(
  "/create",
  bookingValidation.createBooking(),
  validate,
  bookingController.create
);
routesBooking.get("/list", bookingController.list);
routesBooking.put(
  "/update/:id",
  bookingValidation.updateBooking(),
  validate,
  bookingController.update
);

routesBooking.get(
  "/search/:id",
  bookingValidation.searchBooking(),
  validate,
  bookingController.search
);

routesBooking.delete(
  "/update/:id",
  bookingValidation.deleteBooking(),
  validate,
  bookingController.delete
);

module.exports = routesBooking;
