const express = require("express");
const routesPlace = express.Router();
const placeController = require("../controllers/placeController");
const { uploadImage } = require("../helper/uploadImage");
const validate = require("../middlewares/validate");
const placeValidation = require("../validations/placeValidation");
//place
routesPlace.get("/place/list", placeController.list);
routesPlace.post(
  "/place/create",

  placeValidation.createPlace(),
  validate,
  uploadImage("place").array("images", 5),
  placeController.update
);
routesPlace.put(
  "/place/update/:id",

  placeValidation.updatePlace(),
  validate,
  uploadImage("place").array("images", 5),
  placeController.update
);
routesPlace.delete(
  "/place/delete/:id",
  placeValidation.deletePlace(),
  validate,
  placeController.delete
);
routesPlace.get(
  "/place/search/:id",
  placeValidation.searchPlace(),
  validate,
  placeController.search
);
