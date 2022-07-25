const express = require("express");
const routesUser = express.Router();
const userController = require("../controllers/userController");
const { verifyToken } = require("../helper/jwt");
const { uploadImage } = require("../helper/uploadImage");
const validate = require("../middlewares/validate");
const userValidation = require("../validations/userValidation");
//user
routesUser.post(
  "/user/register",
  userValidation.registerUser(),
  validate,
  uploadImage("user").single("profileImage"),
  userController.register
);
routesUser.post(
  "/user/login",
  userValidation.loginUser(),
  validate,
  userController.login
);

routesUser.get("/user/list", verifyToken, userController.list);

routesUser.put(
  "/user/update/:id",
  verifyToken,
  userValidation.updateUser(),
  validate,
  uploadImage("user").single("profileImage"),
  userController.update
);

routesUser.delete(
  "/user/delete/:id",
  verifyToken,
  userValidation.deleteUser(),
  validate,
  userController.delete
);

routesUser.get(
  "/user/search/:id",
  verifyToken,
  userValidation.searchUser(),
  validate,
  userController.search
);

module.exports = routesUser;
