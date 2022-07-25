const express = require("express");
const routesMyCoach = express.Router();
const { uploadImage } = require("../helper/uploadImage");
const validate = require("../middlewares/validate");
const myCoachValidation = require("../validations/myCoachValidation");

const myCoachController = require("../controllers/myCoachController");
//myCoach
routesMyCoach.post(
  "/myCoach/create",
  myCoachValidation.createMyCoach(),
  validate,
  myCoachController.create
);
routesMyCoach.get("/myCoach/list", myCoachController.list);
routesMyCoach.put(
  "/myCoach/update/:id",
  myCoachValidation.updateMyCoach(),
  validate,
  myCoachController.update
);
routesMyCoach.delete(
  "/myCoach/delete/:id",
  myCoachValidation.deleteMyCoach(),
  validate,
  myCoachController.delete
);
routesMyCoach.get(
  "/myCoach/search/:id",
  myCoachValidation.searchMyCoach(),
  validate,
  myCoachController.search
);
