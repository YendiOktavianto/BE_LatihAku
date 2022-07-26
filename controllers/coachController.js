const {
  loginCoach,
  registerCoach,
  readOneCoach,
  readAllCoach,
  updateCoach,
  deleteCoach,
} = require("../services/coachServices");
const { compareHash } = require("../helper/hashPassword");
const { createToken } = require("../helper/jwt");

class coachController {
  static async login(request, response) {
    try {
      const { firstName, password } = request.body;
      const foundCoach = await loginCoach(firstName);

      if (!foundCoach) {
        throw new Error("USER_NOT_FOUND");
      }

      const correctPassword = compareHash(password, foundCoach.password);

      if (!correctPassword) {
        throw new Error("INVALID_PASSWORD");
      }

      const payload = {
        id: foundCoach.id,
        username: foundCoach.username,
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
      console.log(err);
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
  static async logout(request, response) {
    try {
      const token =
        request.body.token ||
        request.query.token ||
        request.headers["x-access-token"] ||
        (request.headers.authorization &&
          request.headers.authorization.split(" ")[1]);

      if (!token) {
        throw new Error("TOKEN_NOT_FOUND");
      }
      destroyToken(token);
      response.status(200).json({
        statusCode: 200,
        message: "Logout Successfully",
      });
    } catch (err) {
      console.log(err);
      let code = 500;
      let message = "Internal Server Error";

      if (err.message === "TOKEN_NOT_FOUND") {
        code = 403;
        message = "A token is required for authentication";
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
        phone,
        email,
        password,
        ktp,
        rating,
        description,
        address,
        favourite,
        comments,
        budget,
      } = request.body;

      const profileImage = request.file.path;
      const dataCoach = {
        firstName,
        lastName,
        username,
        gender,
        phone,
        email,
        password,
        profileImage,
        ktp,
        rating,
        description,
        address,
        favourite,
        comments,
        budget,
      };

      const newCoach = await registerCoach(dataCoach);
      if (!newCoach) {
        throw new Error("FAIL_CREATE_ACCOUNT");
      }

      response.status(201).json({
        statusCode: 201,
        message: "Create Account Successfully",
        data: newCoach,
      });
    } catch (err) {
      console.log(err);
      let code = 500;
      let message = "Internal Server Error";

      if (err.message === "FAIL_CREATE_ACCOUNT") {
        code = 400;
        message = "Fail Create Account";
      }

      response.status(code).json({
        statusCode: code,
        message,
      });
    }
  }

  static async list(request, response) {
    try {
      const findAllCoach = await readAllCoach();
      if (findAllCoach <= 0) {
        throw new Error("COACH_IS_EMPTY");
      }
      response.status(200).json({
        statusCode: 200,
        message: "Data Coach Found",
        data: findAllCoach,
      });
    } catch (err) {
      let code = 500;
      let message = "Internal Server Error";

      if (err.message === "COACH_IS_EMPTY") {
        code = 400;
        message = "Data Coach Is Empty";
      }
      response.status(code).json({
        statusCode: code,
        message,
      });
    }
  }

  static async update(request, response) {
    try {
      const coachId = request.params.id;
      const {
        name,
        username,
        gender,
        phone,
        email,
        password,
        ktp,
        rating,
        description,
        address,
        favourite,
        comments,
        budget,
      } = request.body;
      const profileImage = request.file.path;

      const updateData = {
        name,
        username,
        gender,
        phone,
        email,
        password,
        profileImage,
        ktp,
        rating,
        description,
        address,
        favourite,
        comments,
        budget,
      };

      const updatedCoach = await readOneCoach(coachId);
      if (updatedCoach <= 0) {
        throw new Error("COACH_NOT_FOUND");
      } else {
        updateCoach.update(updateData);
      }
      response.status(200).json({
        statusCode: 200,
        message: "Data Coach updated Successfully",
        data: updatedCoach,
      });
    } catch (err) {
      console.log(err);
      let code = 500;
      let message = "Internal Server Error";

      if (err.name === "SequelizeValidationError") {
        code = 400;
        message = "Bad Request";
      } else if (err.message === "COACH_NOT_FOUND") {
        code = 404;
        message = "Coach Not Found";
      }

      response.status(code).json({
        statusCode: code,
        message,
      });
    }
  }

  static async delete(request, response) {
    try {
      const coachId = request.params.id;

      const deletedCoach = await deleteCoach(coachId);
      if (deletedCoach <= 0) {
        throw new Error("COACH_NOT_FOUND");
      }

      response.status(200).json({
        statusCode: 200,
        message: "Data Coach deleted Successfully",
        data: deletedCoach,
      });
    } catch (err) {
      let code = 500;
      let message = "Internal Server Error";

      if (err.message === "COACH_NOT_FOUND") {
        code = 400;
        message = "Data Coach Not Found";
      }

      response.status(code).json({
        statusCode: code,
        message,
      });
    }
  }

  static async search(request, response) {
    try {
      const coachId = request.params.id;

      const findCoach = await readOneCoach(coachId);
      if (findCoach <= 0) {
        throw new Error("COACH_NOT_FOUND");
      }

      response.status(200).json({
        statusCode: 200,
        message: "Data Coach Found",
        data: findCoach,
      });
    } catch (err) {
      let code = 500;
      let message = "Internal Server Error";

      if (err.message === "COACH_NOT_FOUND") {
        code = 400;
        message = "Data Coach Not Found";
      }

      response.status(code).json({
        statusCode: code,
        message,
      });
    }
  }
}

module.exports = coachController;
