const express = require("express");
const routesPlace = express.Router();
const placeController = require("../controllers/placeController");
const { verifyToken } = require("../helper/jwt");
const { uploadImage } = require("../helper/uploadImage");
const validate = require("../middlewares/validate");
const placeValidation = require("../validations/placeValidation");
//place
routesPlace.get("/place/list", verifyToken, placeController.list);

routesPlace.post(
  "/place/create",
  verifyToken,
  placeValidation.createPlace(),
  validate,
  uploadImage("place").array("images", 5),
  placeController.update
);

routesPlace.put(
  "/place/update/:id",
  verifyToken,
  placeValidation.updatePlace(),
  validate,
  uploadImage("place").array("images", 5),
  placeController.update
);

routesPlace.delete(
  "/place/delete/:id",
  verifyToken,
  placeValidation.deletePlace(),
  validate,
  placeController.delete
);

routesPlace.get(
  "/place/search/:id",
  verifyToken,
  placeValidation.searchPlace(),
  validate,
  placeController.search
);

module.exports = routesPlace;
