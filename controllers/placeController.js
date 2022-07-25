const { uploadImage } = require("../helper/uploadImage");
const {
  createPlace,
  readOnePlace,
  readAllPlace,
  updatePlace,
  deletePlace,
} = require("../services/placeServices");

class placeController {
  static async create(request, response) {
    try {
      const {
        name,
        owner,
        price,
        location,
        rating,
        description,
        favourite,
        phone,
        comments,
      } = request.body;
      const images = request.file.path;
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

      newPlace = await createPlace(dataPlace);
      if (!newPlace) {
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

  static async list(request, response) {
    try {
      findAllPlace = await readAllPlace();
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

  static async update(request, response) {
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
        phone,
        comments,
      } = request.body;
      const images = request.file.path;
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

      const updatedPlace = await updatePlace(updateData, placeId);
      response.status(200).json({
        statusCode: 200,
        message: "Data Place Updated Successfully",
        data: updatedPlace,
      });
    } catch (err) {
      console.log(err);
      let code = 500;
      let message = "Internal Server Error";

      if (err.name === "SequelizeValidationError") {
        code = 400;
        message = "Bad Request";
      } else if (err.message === "PLACE_NOT_FOUND") {
        code = 404;
        message = "Place Not Found";
      }

      response.status(code).json({
        statusCode: code,
        message,
      });
    }
  }

  static async delete(response) {
    try {
      const placeId = request.params.id;

      const deletedPlace = await deletePlace(placeId);
      if (deletedPlace <= 0) {
        throw new Error("PLACE_NOT_FOUND");
      }

      response.status(200).json({
        statusCode: 200,
        message: "Data Place deleted Successfully",
        data: deletedPlace,
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

  static async search(request, response) {
    try {
      const placeId = request.params.id;

      const findPlace = await readOnePlace(placeId);
      if (findPlace <= 0) {
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
