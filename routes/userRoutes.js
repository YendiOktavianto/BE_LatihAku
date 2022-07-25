const express = require("express");
const routesUser = express.Router();
const userController = require("../controllers/userController");
const { uploadImage } = require("../helper/uploadImage");
const validate = require("../middlewares/validate");
const userValidation = require("../validations/userValidation");
//user
routesUser.post(
  "/register",

  userValidation.registerUser(),
  validate,
  uploadImage("user").single("profileImage"),
  userController.register
);
routesUser.post(
  "/login",

  userValidation.loginUser(),
  validate,
  userController.login
);
routesUser.get("/list", userController.list);
routesUser.put(
  "/update/:id",
  userValidation.updateUser(),
  validate,
  uploadImage("user").single("profileImage"),
  userController.update
);
routesUser.delete(
  "/delete/:id",
  userValidation.deleteUser(),
  validate,
  userController.delete
);
routesUser.get(
  "/search/:id",
  userValidation.searchUser(),
  validate,
  userController.search
);

module.exports = routesUser;
