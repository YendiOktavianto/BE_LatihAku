const { LoginCoach, DeleteCoach } = require("../services/coachServices");

class coachController {
  static loginCoach(request, response) {
    try {
      const { username, password } = request.body;
      const foundCoach = LoginCoach(username);

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

  static deleteCoach(response) {
    try {
      const coachID = request.params.id;

      const deletedCoach = DeleteCoach(coachID);

      if (deletedCoach < 0) {
        throw new Error("USER_NOT_FOUND");
      }

      response.status(200).json({
        statusCode: 200,
        message: "Register Successfully",
        data: deletedCoach,
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

  static registerCoach(request, response) {
    try {
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

      const dataCoach = {
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

      const newCoach = RegisterCoach(dataCoach);

      response.status(200).json({
        statusCode: 200,
        message: "Register Successfully",
        data: newCoach,
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

  static updateCoach(request, response) {
    try {
      const coachID = request.params.id;
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

      const updateCoach = {
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

      const oldCoach = FindCoach(coachID);
      if (oldCoach < 0) {
        throw new Error("USER_NOT_FOUND");
      } else {
        UpdateCoach(updateCoach);
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

  static findCoach(request, response) {
    try {
      const coachID = request.params.id;

      const findCoach = FindCoach(coachID);
      if (findCoach < 0) {
        throw new Error("USER_NOT_FOUND");
      }

      response.status(200).json({
        statusCode: 200,
        message: "Register Successfully",
        data: findCoach,
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

  static findAllCoach(response) {
    try {
      const findAllCoach = FindAllCoach();
      if (findAllCoach < 0) {
        throw new Error("USER_NOT_FOUND");
      }
      response.status(200).json({
        statusCode: 200,
        message: "Register Successfully",
        data: findAllCoach,
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

module.exports = coachController;
