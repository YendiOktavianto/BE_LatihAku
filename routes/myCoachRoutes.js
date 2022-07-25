const express = require("express");
const routesMyCoach = express.Router();
const { uploadImage } = require("../helper/uploadImage");
const validate = require("../middlewares/validate");
const myCoachValidation = require("../validations/myCoachValidation");

const myCoachController = require("../controllers/myCoachController");
const { verifyToken } = require("../helper/jwt");
//myCoach
routesMyCoach.post(
  "/create",
  verifyToken,
  myCoachValidation.createMyCoach(),
  validate,
  myCoachController.create
);
routesMyCoach.get("/list", verifyToken, myCoachController.list);
routesMyCoach.put(
  "/update/:id",
  verifyToken,
  myCoachValidation.updateMyCoach(),
  validate,
  myCoachController.update
);
routesMyCoach.delete(
  "/delete/:id",
  verifyToken,
  myCoachValidation.deleteMyCoach(),
  validate,
  myCoachController.delete
);
routesMyCoach.get(
  "/search/:id",
  verifyToken,
  myCoachValidation.searchMyCoach(),
  validate,
  myCoachController.search
);

module.exports = routesMyCoach;
