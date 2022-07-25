const express = require("express");
const routesMyCoach = express.Router();
const { uploadImage } = require("../helper/uploadImage");
const validate = require("../middlewares/validate");
const myCoachValidation = require("../validations/myCoachValidation");

const myCoachController = require("../controllers/myCoachController");
//myCoach
routesMyCoach.post(
  "/create",
  myCoachValidation.createMyCoach(),
  validate,
  myCoachController.create
);
routesMyCoach.get("/myCoach/list", myCoachController.list);
routesMyCoach.put(
  "/update/:id",
  myCoachValidation.updateMyCoach(),
  validate,
  myCoachController.update
);
routesMyCoach.delete(
  "/delete/:id",
  myCoachValidation.deleteMyCoach(),
  validate,
  myCoachController.delete
);
routesMyCoach.get(
  "/search/:id",
  myCoachValidation.searchMyCoach(),
  validate,
  myCoachController.search
);

module.exports = routesMyCoach;
