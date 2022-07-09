const {
  createPlace,
  readOnePlace,
  readAllPlace,
  updatePlace,
  deletePlace,
} = require("../services/placeServices");

class placeController {
  static create(request, response) {
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

      const newPlace = createPlace(dataPlace);

      if (!name) {
        throw new Error("FAIL_CREATE_PLACE");
      }

      response.status(201).json({
        statusCode: 201,
        message: "Create Place Successfully",
        data: newPlace,
      });
    } catch (err) {
      let code = 500;
      let message = "Internal Server Error";

      if (err.message === "FAIL_CREATE_PLACE") {
        code = 400;
        message = "Fail Create Place";
      }

      response.status(code).json({
        statusCode: code,
        message,
      });
    }
  }

  static list(response) {
    try {
      const findAllPlace = readAllPlace();
      if (findAllPlace <= 0) {
        throw new Error("PLACE_IS_EMPTY");
      }
      response.status(200).json({
        statusCode: 200,
        message: "Data Place Found",
        data: findAllPlace,
      });
    } catch (err) {
      console.log(err);
      let code = 500;
      let message = "Internal Server Error";

      if (err.message === "PLACE_IS_EMPTY") {
        code = 400;
        message = "Data Place is Empty";
      }
      response.status(code).json({
        statusCode: code,
        message,
      });
    }
  }

  static update(request, response) {
    try {
      const placeId = request.params.id;
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

      const updateData = {
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

      const newPlace = "";
      const oldPlace = readOnePlace(placeId);
      if (oldPlace <= 0) {
        throw new Error("PLACE_NOT_FOUND");
      } else {
        newPlace = updatePlace(updateData);
      }

      response.status(200).json({
        statusCode: 200,
        message: "Data Place Updated Successfully",
        data: newPlace,
      });
    } catch (err) {
      console.log(err);
      let code = 500;
      let message = "Internal Server Error";

      if (err.name === "SequelizeValidationError") {
        code = 400;
        msg = "Bad Request";
      } else if (err.message === "PLACE_NOT_FOUND") {
        code = 404;
        msg = "Place Not Found";
      }

      response.status(code).json({
        statusCode: code,
        message,
      });
    }
  }

  static delete(response) {
    try {
      const placeId = request.params.id;

      const deletedPlace = deletePlace(placeId);

      if (deletedPlace <= 0) {
        throw new Error("PLACE_NOT_FOUND");
      }

      response.status(200).json({
        statusCode: 200,
        message: "Data Place deleted Successfully",
      });
    } catch (err) {
      let code = 500;
      let message = "Internal Server Error";

      if (err.message === "PLACE_NOT_FOUND") {
        code = 400;
        message = "Data Place Not Found";
      }

      response.status(code).json({
        statusCode: code,
        message,
      });
    }
  }

  static search(request, response) {
    try {
      const placeId = request.params.id;

      const findPlace = readOnePlace(placeId);
      if (oldPlace <= 0) {
        throw new Error("PLACE_NOT_FOUND");
      }

      response.status(200).json({
        statusCode: 200,
        message: "Data Place Found",
        data: findPlace,
      });
    } catch (err) {
      let code = 500;
      let message = "Internal Server Error";

      if (err.message === "PLACE_NOT_FOUND") {
        code = 400;
        message = "Data Place Not Found";
      }

      response.status(code).json({
        statusCode: code,
        message,
      });
    }
  }
}

module.exports = placeController;
