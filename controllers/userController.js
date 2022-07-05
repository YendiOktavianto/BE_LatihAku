const { User } = require("../models");
const {
  compareHash
} = require('../helper');
const {
  createToken
} = require('../helper/jwt');
class userController {
  static async login(request, response) {
    try {
      const { username, password } = request.body;
      const foundUser = await User.findOne({
        where: {
          username,
        },
      });

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
}

module.exports = userController;
