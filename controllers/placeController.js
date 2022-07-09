const {
  DeletePlace,
  CreatePlace,
  FindPlace,
  UpdatePlace,
} = require("../services/placeServices");

class placeController {
  static deletePlace(response) {
    try {
      const placeID = request.params.id;

      const deletedPlace = DeletePlace(placeID);

      if (deletedPlace < 0) {
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

  static createPlace(request, response) {
    try {
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

      const dataPlace = {
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

      const newPlace = CreatePlace(dataPlace);

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

  static updatePlace(request, response) {
    try {
      const placeID = request.params.id;
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

      const updatePlace = {
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

      const oldPlace = FindPlace(placeID);
      if (oldPlace < 0) {
        throw new Error("USER_NOT_FOUND");
      } else {
        newPlace = UpdatePlace(updatePlace);
      }

      response.status(200).json({
        statusCode: 200,
        message: "Update Successfully",
        data: newPlace,
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

  static findPlace(request, response) {
    try {
      const placeID = request.params.id;

      const oldPlace = FindUser(placeID);
      if (oldPlace < 0) {
        throw new Error("USER_NOT_FOUND");
      }

      response.status(200).json({
        statusCode: 200,
        message: "Register Successfully",
        data: oldPlace,
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

  static findAllPlace(response) {
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

module.exports = placeController;
