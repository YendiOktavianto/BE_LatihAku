const express = require("express");
const routesBooking = express.Router();
const bookingController = require("../controllers/bookingController");
const { uploadImage } = require("../helper/uploadImage");
const validate = require("../middlewares/validate");
const bookingValidation = require("../validations/bookingValidation");
//booking
routesBooking.post(
  "/booking/create",
  bookingValidation.createBooking(),
  validate,
  bookingController.create
);
routesBooking.get("/booking/list", bookingController.list);
routesBooking.put(
  "/booking/update/:id",
  bookingValidation.updateBooking(),
  validate,
  bookingController.update
);
routesBooking.get(
  "/booking/search/:id",
  bookingValidation.searchBooking(),
  validate,
  bookingController.search
);
routesBooking.delete(
  "/booking/update/:id",
  bookingValidation.deleteBooking(),
  validate,
  bookingController.delete
);

module.exports = routesBooking;
