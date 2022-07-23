const { compareHash, hashPassword } = require("../helper/hashPassword");
const { createToken } = require("../helper/jwt");
const {
  loginUser,
  registerUser,
  deleteUser,
  updateUser,
  readOneUser,
  readAllUser,
} = require("../services/userServices");

class userController {
  static async login(request, response) {
    try {
      const { firstName, password } = request.body;

      const foundUser = await loginUser(firstName);

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

  static async register(request, response) {
    try {
      const { firstName, lastName, phoneNumber, email, password, address } =
        request.body;
      const profileImage = request.file.path;

      const dataUser = {
        firstName,
        lastName,
        phoneNumber,
        email,
        password,
        profileImage,
        address,
      };
      dataUser.password = hashPassword(password);

      const newUser = await registerUser(dataUser);
      response.status(200).json({
        statusCode: 200,
        message: "Register Successfully",
        data: newUser,
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

  static async list(request, response) {
    try {
      const findAllUser = await readAllUser();
      console.log(findAllUser);
      if (findAllUser < 0) {
        throw new Error("User_IS_EMPTY");
      }
      response.status(200).json({
        statusCode: 200,
        message: "Data User Found",
        data: findAllUser,
      });
    } catch (err) {
      let code = 500;
      let message = "Internal Server Error";

      if (err.message === "USER_IS_EMPTY") {
        code = 400;
        message = "Data User Is Empty";
      }
      response.status(code).json({
        statusCode: code,
        message,
      });
    }
  }

  static async update(request, response) {
    try {
      const userId = request.params.id;
      const { firstName, lastName, phoneNumber, email, password, address } =
        request.body;
      const profileImage = request.file.path;
      const updateData = {
        firstName,
        lastName,
        phoneNumber,
        email,
        password,
        profileImage,
        address,
      };
      const updatedUser = await updateUser(updateData, userId);

      response.status(200).json({
        statusCode: 200,
        message: "Data User Updated Successfully",
        data: updatedUser,
      });
    } catch (err) {
      let code = 500;
      let message = "Internal Server Error";

      if (err.name === "SequelizeValidationError") {
        code = 400;
        msg = "Bad Request";
      } else if (err.message === "USER_NOT_FOUND") {
        code = 404;
        msg = "User Not Found";
      }

      response.status(code).json({
        statusCode: code,
        message,
      });
    }
  }

  static async delete(response) {
    try {
      const userId = request.params.id;

      const deletedUser = await deleteUser(userId);
      if (deletedUser < 0) {
        throw new Error("USER_NOT_FOUND");
      }

      response.status(200).json({
        statusCode: 200,
        message: "Data User Deleted Successfully",
        data: deletedUser,
      });
    } catch (err) {
      let code = 500;
      let message = "Internal Server Error";

      if (err.message === "USER_NOT_FOUND") {
        code = 400;
        message = "Data User Not Found";
      }

      response.status(code).json({
        statusCode: code,
        message,
      });
    }
  }

  static async search(request, response) {
    try {
      const userId = request.params.id;

      const findUser = await readOneUser(userId);
      if (findUser <= 0) {
        throw new Error("USER_NOT_FOUND");
      }

      response.status(200).json({
        statusCode: 200,
        message: "Data User Found",
        data: findUser,
      });
    } catch (err) {
      let code = 500;
      let message = "Internal Server Error";

      if (err.message === "USER_NOT_FOUND") {
        code = 400;
        message = "Data User Not Found";
      }

      response.status(code).json({
        statusCode: code,
        message,
      });
    }
  }
}

module.exports = userController;
