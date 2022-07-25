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
  verifyToken,
  bookingValidation.createBooking(),
  validate,
  bookingController.create
);
routesBooking.get("/list",verifyToken,  bookingController.list);
routesBooking.put(
  "/update/:id",
  verifyToken,
  bookingValidation.updateBooking(),
  validate,
  bookingController.update
);

routesBooking.get(
  "/search/:id",
  verifyToken,
  bookingValidation.searchBooking(),
  validate,
  bookingController.search
);

routesBooking.delete(
  "/update/:id",
  verifyToken,
  bookingValidation.deleteBooking(),
  validate,
  bookingController.delete
);

module.exports = routesBooking;
