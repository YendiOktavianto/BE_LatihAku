const express = require("express");
const routesMyCoach = express.Router();
const { uploadImage } = require("../helper/uploadImage");
const validate = require("../middlewares/validate");
const myCoachValidation = require("../validations/myCoachValidation");

const myCoachController = require("../controllers/myCoachController");
const { verifyToken } = require("../helper/jwt");
//myCoach
routesMyCoach.post(
  "/myCoach/create",
  verifyToken,
  myCoachValidation.createMyCoach(),
  validate,
  myCoachController.create
);
routesMyCoach.get("/myCoach/list", verifyToken, myCoachController.list);
routesMyCoach.put(
  "/myCoach/update/:id",
  verifyToken,
  myCoachValidation.updateMyCoach(),
  validate,
  myCoachController.update
);
routesMyCoach.delete(
  "/myCoach/delete/:id",
  verifyToken,
  myCoachValidation.deleteMyCoach(),
  validate,
  myCoachController.delete
);
routesMyCoach.get(
  "/myCoach/search/:id",
  verifyToken,
  myCoachValidation.searchMyCoach(),
  validate,
  myCoachController.search
);

module.exports = routesMyCoach;
