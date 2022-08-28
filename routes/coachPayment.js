const express = require("express");
const routesCoachPayment = express.Router();
const coachPaymentController = require("../controllers/coachPaymentController");
const { verifyToken } = require("../helper/jwt");
const validate = require("../middlewares/validate");
const coachPaymentValidation = require("../validations/coachPaymentValidation");

//CoachPayment
routesCoachPayment.post(
  "/create",
  verifyToken,
  coachPaymentValidation.createCoachPayment(),
  validate,
  coachPaymentController.create
);

routesCoachPayment.get("/list", verifyToken, coachPaymentController.list);
routesCoachPayment.put(
  "/update/:id",
  coachPaymentValidation.updateCoachPayment(),
  validate,
  coachPaymentController.update
);

routesCoachPayment.delete(
  "/delete/:id",
  verifyToken,
  coachPaymentValidation.deleteCoachPayment(),
  validate,
  coachPaymentController.delete
);

routesCoachPayment.get(
  "/search/:id",
  verifyToken,
  coachPaymentValidation.searchCoachPayment(),
  validate,
  coachPaymentController.search
);

routesCoachPayment.get(
  "/searchByName",
  verifyToken,
  coachPaymentValidation.searchCoachPaymentByName(),
  validate,
  coachPaymentController.searchByName
);

module.exports = routesCoachPayment;
