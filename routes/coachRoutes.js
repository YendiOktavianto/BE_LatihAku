const express = require("express");
const routesCoach = express.Router();
const coachController = require("../controllers/coachController");
const { verifyToken } = require("../helper/jwt");
const { uploadImage } = require("../helper/uploadImage");
const validate = require("../middlewares/validate");
const coachValidation = require("../validations/coachValidation");
//coach
routesCoach.post(
  "/register",
  coachValidation.registerCoach(),
  validate,
  uploadImage("coach").single("profileImage"),
  coachController.register
);
routesCoach.post(
  "/login",
  coachValidation.loginCoach(),
  validate,
  coachController.login
);
routesCoach.get("/coach/list", verifyToken, coachController.list);
routesCoach.put(
  "/update/:id",
  verifyToken,
  coachValidation.updateCoach(),
  validate,
  uploadImage("coach").single("profileImage"),
  coachController.update
);

routesCoach.delete(
  "/delete/:id",
  verifyToken,
  coachValidation.deleteCoach(),
  validate,
  coachController.delete
);
routesCoach.get(
  "/search/:id",
  verifyToken,
  coachValidation.searchCoach(),
  validate,
  coachController.search
);

module.exports = routesCoach;
