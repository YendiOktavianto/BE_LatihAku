const { uploadImage } = require("../helper/uploadImage");

class uploadImagesController {
  static uploadOneImage(request, response, next) {
    try {
      uploadImage("user").single("profileImage");
      if (err instanceof multer.MulterError) {
        throw new Error("MULTER_UPLOADING_ERROR");
      } else return next();
      //response.status(200).end("Your files uploaded.");
    } catch (err) {
      let code = 500;
      let message = "Internal Server Error";
      if (err.message === "MULTER_UPLOADING_ERROR") {
        code = 500;
        message = `Multer uploading error: ${err.message}`;
      } else if (err.name == "ExtensionError") {
        code = 413;
        message = err.message;
      }
      response.status(code).json({
        statusCode: code,
        message,
      });
    }
  }
  static uploadMultipleImage(request, response, limit) {
    try {
      uploadImage.array(request, limit);
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
