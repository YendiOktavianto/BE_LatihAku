class myCoachController {
  static deleteMyCoach(response) {
    try {
      const myCoachID = request.params.id;

      const deletedMyCoach = DeletePlace(myCoachID);

      if (deletedMyCoach < 0) {
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

  static createMyCoach(request, response) {
    try {
      const { schedule, timeRemaining, salary } = request.body;

      const dataMyCoach = {
        schedule,
        timeRemaining,
        salary,
      };
      const newMyCoach = CreateMyCoach(dataMyCoach);

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

  static updateMyCoach(request, response) {
    try {
      const myCoachID = request.params.id;
      const {
        name,
        owner,
        price,
        location,
        rating,
        description,
        favourite,
        images,
        phone,
        comments,
      } = request.body;

      const myCoachPlace = {
        name,
        owner,
        price,
        location,
        rating,
        description,
        favourite,
        images,
        phone,
        comments,
      };

      const oldMyCoach = FindMyCoach(myCoachID);
      if (oldMyCoach < 0) {
        throw new Error("USER_NOT_FOUND");
      } else {
        newMyCoach = UpdateMyCoach(updateMyCoach);
      }

      response.status(200).json({
        statusCode: 200,
        message: "Update Successfully",
        data: newMyCoach,
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

  static findMyCoach(request, response) {
    try {
      const myCoachID = request.params.id;

      const oldMyCoach = FindMyCoach(placeID);
      if (oldMyCoach < 0) {
        throw new Error("USER_NOT_FOUND");
      }

      response.status(200).json({
        statusCode: 200,
        message: "Register Successfully",
        data: oldMyCoach,
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

  static findAllMyCoach(response) {
    try {
      const findAllPlace = FindAllPlace();
      if (findAllPlace < 0) {
        throw new Error("USER_NOT_FOUND");
      }
      response.status(200).json({
        statusCode: 200,
        message: "Find Place Successfully",
        data: findAllPlace,
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

module.exports = myCoachController;
