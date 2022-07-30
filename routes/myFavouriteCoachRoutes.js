const express = require("express");
const routesMyFavouriteCoach = express.Router();
const { uploadImage } = require("../helper/uploadImage");
const validate = require("../middlewares/validate");
const myFavouriteCoachValidation = require("../validations/myFavouriteCoachValidation");

const myFavouriteCoachController = require("../controllers/myFavouriteCoachController");
const { verifyToken } = require("../helper/jwt");
//myFavouriteCoach
routesMyFavouriteCoach.post(
  "/create",
  verifyToken,
  myFavouriteCoachValidation.createMyFavouriteCoach(),
  validate,
  myFavouriteCoachController.create
);
routesMyFavouriteCoach.get(
  "/list",
  verifyToken,
  myFavouriteCoachController.list
);
routesMyFavouriteCoach.put(
  "/update/:id",
  verifyToken,
  myFavouriteCoachValidation.updateMyFavouriteCoach(),
  validate,
  myFavouriteCoachController.update
);
routesMyFavouriteCoach.delete(
  "/delete/:id",
  verifyToken,
  myFavouriteCoachValidation.deleteMyFavouriteCoach(),
  validate,
  myFavouriteCoachController.delete
);
routesMyFavouriteCoach.get(
  "/search/:id",
  verifyToken,
  myFavouriteCoachValidation.searchMyFavouriteCoach(),
  validate,
  myFavouriteCoachController.search
);

module.exports = routesMyFavouriteCoach;
