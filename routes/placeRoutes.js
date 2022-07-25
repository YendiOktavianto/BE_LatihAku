const express = require("express");
const routesPlace = express.Router();
const placeController = require("../controllers/placeController");
const { uploadImage } = require("../helper/uploadImage");
const validate = require("../middlewares/validate");
const placeValidation = require("../validations/placeValidation");
//place
routesPlace.get("/list", placeController.list);
routesPlace.post(
  "/create",

  placeValidation.createPlace(),
  validate,
  uploadImage("place").array("images", 5),
  placeController.update
);
routesPlace.put(
  "/update/:id",

  placeValidation.updatePlace(),
  validate,
  uploadImage("place").array("images", 5),
  placeController.update
);
routesPlace.delete(
  "/delete/:id",
  placeValidation.deletePlace(),
  validate,
  placeController.delete
);
routesPlace.get(
  "/search/:id",
  placeValidation.searchPlace(),
  validate,
  placeController.search
);

module.exports = routesPlace;
