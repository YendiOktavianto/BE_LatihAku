const express = require("express");
const routesMyTrainee = express.Router();
const { uploadImage } = require("../helper/uploadImage");
const validate = require("../middlewares/validate");
const myTraineeValidation = require("../validations/myTraineeValidation");

const myTraineeController = require("../controllers/myTraineeController");
const { verifyToken } = require("../helper/jwt");
//myTrainee
routesMyTrainee.post(
  "/create",
  verifyToken,
  myTraineeValidation.createMyTrainee(),
  validate,
  myTraineeController.create
);
routesMyTrainee.get("/list", verifyToken, myTraineeController.list);
routesMyTrainee.put(
  "/update/:id",
  verifyToken,
  myTraineeValidation.updateMyTrainee(),
  validate,
  myTraineeController.update
);
routesMyTrainee.delete(
  "/delete/:id",
  verifyToken,
  myTraineeValidation.deleteMyTrainee(),
  validate,
  myTraineeController.delete
);
routesMyTrainee.get(
  "/search/:id",
  verifyToken,
  myTraineeValidation.searchMyTrainee(),
  validate,
  myTraineeController.search
);

routesMyTrainee.get(
  "/searchByName",
  verifyToken,
  myTraineeValidation.searchMyTraineeByName(),
  validate,
  myTraineeController.searchByName
);

module.exports = routesMyTrainee;
