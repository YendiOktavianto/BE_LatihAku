const { uploadImage } = require("../helper/uploadImage");

class uploadImagesController {
  static uploadOneImage(image) {
    try {
      uploadImage.single(image);
      if (err instanceof multer.MulterError) {
        throw new Error("MULTER_UPLOADING_ERROR");
      }

      //response.status(200).end("Your files uploaded.");
    } catch (err) {
      let code = 500;
      let message = "Internal Server Error";
      if (err.message === "MULTER_UPLOADING_ERROR") {
        code = 501;
        message = `Multer uploading error: ${err.message}`;
      } else if (err.name == "ExtensionError") {
        code = 413;
        message = err.message;
      }
      // response.status(code).json({
      //   statusCode: code,
      //   message,
      // });
    }
  }
  static uploadMultipleImage(image, limit) {
    try {
      uploadImage.array(image, limit);
      if (err instanceof multer.MulterError) {
        throw new Error("MULTER_UPLOADING_ERROR");
      }

      //response.status(200).end("Your files uploaded.");
    } catch (err) {
      let code = 500;
      let message = "Internal Server Error";
      if (err.message === "MULTER_UPLOADING_ERROR") {
        code = 501;
        message = `Multer uploading error: ${err.message}`;
      } else if (err.name == "ExtensionError") {
        code = 413;
        message = err.message;
      }
      // response.status(code).json({
      //   statusCode: code,
      //   message,
      // });
    }
  }
}

module.exports = uploadImagesController;
