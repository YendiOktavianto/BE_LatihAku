const express = require("express");
const routesPlacePayment = express.Router();
const placePaymentController = require("../controllers/placePaymentController");
const { verifyToken } = require("../helper/jwt");
const validate = require("../middlewares/validate");
const placePaymentValidation = require("../validations/coachPaymentValidation");

routesPlacePayment.post(
  "/create",
  verifyToken,
  placePaymentValidation.createPlacePayment(),
  validate,
  placePaymentController.create
);

routesPlacePayment.get("/list", verifyToken, placePaymentController.list);

routesPlacePayment.put(
  "/update/:id",
  placePaymentValidation.updatePlacePayment(),
  validate,
  placePaymentController.update
);

routesPlacePayment.delete(
  "/delete/:id",
  verifyToken,
  placePaymentValidation.deletePlacePayment(),
  validate,
  placePaymentController.delete
);

routesPlacePayment.get(
  "/search/:id",
  verifyToken,
  placePaymentValidation.searchPlacePayment(),
  validate,
  placePaymentController.search
);

routesPlacePayment.get(
  "/searchByName",
  verifyToken,
  placePaymentValidation.searchPlacePaymentByName(),
  validate,
  placePaymentController.searchByName
);

module.exports = routesPlacePayment;
