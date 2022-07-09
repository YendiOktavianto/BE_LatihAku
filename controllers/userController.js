const { User } = require("../models");
const { compareHash } = require("../helper");
const { createToken } = require("../helper/jwt");
const {
  LoginUser,
  RegisterUser,
  DeleteUser,
  UpdateUser,
  FindUser,
} = require("../services/userServices");

class userController {
  static login(request, response) {
    try {
      const { username, password } = request.body;
      const foundUser = LoginUser(username);

      if (!foundUser) {
        throw new Error("USER_NOT_FOUND");
      }

      const correctPassword = compareHash(password, foundUser.password);

      if (!correctPassword) {
        throw new Error("INVALID_PASSWORD");
      }

      const payload = {
        id: foundUser.id,
        username: foundUser.username,
      };

      const access_token = createToken(payload);

      response.status(200).json({
        statusCode: 200,
        message: "Login Successfully",
        access_token: access_token,
      });
    } catch (err) {
      console.log(err);
      let code = 500;
      let message = "Internal Server Error";

      if (err.message === "USER_NOT_FOUND") {
        code = 400;
        message = "Invalid Username or Password";
      }

      response.status(code).json({
        statusCode: code,
        message,
      });
    }
  }

  static delete(response) {
    try {
      const userID = request.params.id;

      const deleteUser = DeleteUser(userID);

      if (deleteUser < 0) {
        throw new Error("USER_NOT_FOUND");
      }

      response.status(200).json({
        statusCode: 200,
        message: "Register Successfully",
      });
    } catch (err) {
      console.log(err);
      let code = 500;
      let message = "Internal Server Error";

      if (err.message === "USER_NOT_FOUND") {
        code = 400;
        message = "Invalid Username or Password";
      }

      response.status(code).json({
        statusCode: code,
        message,
      });
    }
  }

  static register(request, response) {
    try {
      const {
        firstName,
        lastName,
        phoneNumber,
        email,
        password,
        profileImage,
        address,
      } = request.body;

      const dataUser = {
        firstName,
        lastName,
        phoneNumber,
        email,
        password,
        profileImage,
        address,
      };

      const newUser = RegisterUser(dataUser);

      response.status(200).json({
        statusCode: 200,
        message: "Register Successfully",
      });
    } catch (err) {
      console.log(err);
      let code = 500;
      let message = "Internal Server Error";

      if (err.message === "USER_NOT_FOUND") {
        code = 400;
        message = "Invalid Username or Password";
      }

      response.status(code).json({
        statusCode: code,
        message,
      });
    }
  }

  static update(request, response) {
    try {
      const userID = request.params.id;
      const {
        firstName,
        lastName,
        phoneNumber,
        email,
        password,
        profileImage,
        address,
      } = request.body;

      const updateUser = {
        firstName,
        lastName,
        phoneNumber,
        email,
        password,
        profileImage,
        address,
      };

      const oldUser = FindUser(userID);
      if (oldUser < 0) {
        throw new Error("USER_NOT_FOUND");
      } else {
        UpdateUser(updateUser);
      }

      response.status(200).json({
        statusCode: 200,
        message: "Register Successfully",
      });
    } catch (err) {
      console.log(err);
      let code = 500;
      let message = "Internal Server Error";

      if (err.message === "USER_NOT_FOUND") {
        code = 400;
        message = "Invalid Username or Password";
      }

      response.status(code).json({
        statusCode: code,
        message,
      });
    }
  }

  static searchUser(request, response) {
    try {
      const userID = request.params.id;

      const oldUser = FindUser(userID);
      if (oldUser < 0) {
        throw new Error("USER_NOT_FOUND");
      }

      response.status(200).json({
        statusCode: 200,
        message: "Register Successfully",
      });
    } catch (err) {
      console.log(err);
      let code = 500;
      let message = "Internal Server Error";

      if (err.message === "USER_NOT_FOUND") {
        code = 400;
        message = "Invalid Username or Password";
      }

      response.status(code).json({
        statusCode: code,
        message,
      });
    }
  }

  static findAllUser(response) {
    try {
      const findAllUser = FindAllUser();
      if (oldUser < 0) {
        throw new Error("USER_NOT_FOUND");
      }
      response.status(200).json({
        statusCode: 200,
        message: "Register Successfully",
      });
    } catch (err) {
      console.log(err);
      let code = 500;
      let message = "Internal Server Error";

      if (err.message === "USER_NOT_FOUND") {
        code = 400;
        message = "Invalid Username or Password";
      }
      response.status(code).json({
        statusCode: code,
        message,
      });
    }
  }
}

module.exports = userController;
