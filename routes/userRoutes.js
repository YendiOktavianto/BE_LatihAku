const express = require("express");
const uploadImagesController = require("../controllers/uploadImagesController");
const routesUser = express.Router();
const userController = require("../controllers/userController");
const { verifyToken } = require("../helper/jwt");
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

routesUser.post("/logout", verifyToken, userController.logout);

routesUser.get("/list", verifyToken, userController.list);
routesUser.put(
  "/update/:id",
  verifyToken,
  userValidation.updateUser(),
  validate,
  //uploadImagesController.uploadOneImage,
  uploadImage("user").single("profileImage"),
  userController.update
);

routesUser.delete(
  "/delete/:id",
  verifyToken,
  userValidation.deleteUser(),
  validate,
  userController.delete
);

routesUser.get(
  "/search/:id",
  verifyToken,
  userValidation.searchUser(),
  validate,
  userController.search
);

routesUser.get(
  "/searchByName",
  verifyToken,
  userValidation.searchUser(),
  validate,
  userController.searchByName
);

module.exports = routesUser;
