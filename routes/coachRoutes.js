const express = require("express");
const routesCoach = express.Router();
const coachController = require("../controllers/coachController");
const { uploadImage } = require("../helper/uploadImage");
const validate = require("../middlewares/validate");
const coachValidation = require("../validations/coachValidation");
//coach
routesCoach.post(
  "/coach/register",
  coachValidation.registerCoach(),
  validate,
  coachController.register
);
routesCoach.post(
  "/coach/login",
  coachValidation.loginCoach(),
  validate,
  coachController.login
);
routesCoach.get("/coach/list", coachController.list);
routesCoach.put(
  "/coach/update/:id",

  coachValidation.updateCoach(),
  validate,
  uploadImage("coach").single("profileImage"),
  coachController.update
);
routesCoach.delete(
  "/coach/delete/:id",
  coachValidation.deleteCoach(),
  validate,
  coachController.delete
);
routesCoach.get(
  "/coach/search/:id",
  coachValidation.searchCoach(),
  validate,
  coachController.search
);
