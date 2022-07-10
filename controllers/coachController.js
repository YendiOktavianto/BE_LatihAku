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
  static login(request, response) {
    try {
      const { username, password } = request.body;
      const foundCoach = loginCoach(username);

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

  static register(request, response) {
    try {
      // const {
      //   name,
      //   phone,
      //   email,
      //   password,
      //   profileImage,
      //   ktp,
      //   rating,
      //   description,
      //   address,
      //   favourite,
      //   comments,
      //   budget,
      // } = request.body;

      // const dataCoach = {
      //   name,
      //   phone,
      //   email,
      //   password,
      //   profileImage,
      //   ktp,
      //   rating,
      //   description,
      //   address,
      //   favourite,
      //   comments,
      //   budget,
      // };

      const newCoach = registerCoach();
      //      registerCoach(dataCoach);

      if (!email) {
        throw new Error("FAIL_CREATE_ACCOUNT");
      }

      response.status(201).json({
        statusCode: 201,
        message: "Create Account Successfully",
        data: {
          id: newCoach.id,
          email: newCoach.email,
        },
      });
    } catch (err) {
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

  static list(response) {
    try {
      const findAllCoach = readAllCoach();
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

  static update(request, response) {
    try {
      const coachId = request.params.id;
      const {
        name,
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
      } = request.body;

      const updateData = {
        name,
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

      const newCoach = "";
      const oldCoach = readOneCoach(coachId);
      if (oldCoach <= 0) {
        throw new Error("COACH_NOT_FOUND");
      } else {
        newCoach = updateCoach(updateData);
      }

      response.status(200).json({
        statusCode: 200,
        message: "Data Coach updated Successfully",
        data: newCoach,
      });
    } catch (err) {
      console.log(err);
      let code = 500;
      let message = "Internal Server Error";

      if (err.name === "SequelizeValidationError") {
        code = 400;
        msg = "Bad Request";
      } else if (err.message === "COACH_NOT_FOUND") {
        code = 404;
        msg = "Coach Not Found";
      }

      response.status(code).json({
        statusCode: code,
        message,
      });
    }
  }

  static delete(request, response) {
    try {
      const coachId = request.params.id;

      const deletedCoach = deleteCoach(coachId);

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

  static search(request, response) {
    try {
      const coachId = request.params.id;

      const findCoach = readOneCoach(coachId);
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
