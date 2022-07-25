const { compareHash, hashPassword } = require("../helper/hashPassword");
const { createToken } = require("../helper/jwt");
const {
  loginUser,
  registerUser,
  deleteUser,
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

      if (!access_token) {
        throw new Error("ERROR_CREATE_TOKEN");
      }

      response.status(200).json({
        statusCode: 200,
        message: "Login Successfully",
        access_token: access_token,
      });
    } catch (err) {
      let code = 500;
      let message = "Internal Server Error";

      if (err.message === "USER_NOT_FOUND") {
        code = 400;
        message = "Invalid Username or Password";
      } else if (err.message === "ERROR_CREATE_TOKEN") {
        code = 401;
        message = "Error Create Token";
      }

      response.status(code).json({
        statusCode: code,
        message,
      });
    }
  }

  static async register(request, response) {
    try {
      const {
        firstName,
        lastName,
        username,
        gender,
        phoneNumber,
        email,
        password,
        address,
      } = request.body;
      const profileImage = request.file.path;

      const dataUser = {
        firstName,
        username,
        gender,
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

  static async list(response) {
    try {
      const findAllUser = await readAllUser();
      if (findAllUser <= 0) {
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
      const {
        firstName,
        lastName,
        username,
        gender,
        phoneNumber,
        email,
        password,
        address,
      } = request.body;
      const profileImage = request.file.path;
      const updateData = {
        firstName,
        lastName,
        username,
        gender,
        phoneNumber,
        email,
        password,
        profileImage,
        address,
      };

      const unUpdatedUser = await readOneUser(userId);
      if (unUpdatedUser <= 0) {
        throw new Error("USER_NOT_FOUND");
      } else {
        unUpdatedUser.update(updateData);

        //const updatedUser = await updateUser(updateData, userId);
      }
      //console.log(unUpdatedUser);
      response.status(200).json({
        statusCode: 200,
        message: "Data User Updated Successfully",
        data: unUpdatedUser,
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
