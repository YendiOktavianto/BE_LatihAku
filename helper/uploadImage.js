let multer = require("multer");
const DIR_CATEGORY = "./images/category";
const DIR_USER = "./images/user";
const DIR_PLACE = "./images/place";
const DIR_COACH = "./images/coach";

const storage = (DIR) =>
  multer.diskStorage({
    destination: (req, file, cb) => {
      if (DIR == "user") {
        cb(null, DIR_USER);
      } else if (DIR == "place") {
        cb(null, DIR_PLACE);
      } else if (DIR == "category") {
        cb(null, DIR_CATEGORY);
      } else {
        cb(null, DIR_COACH);
      }
    },
    filename: (req, file, cb) => {
      const fileName = file.originalname.toLowerCase().split(" ").join("-");
      cb(null, Date.now() + fileName);
    },
  });

const uploadImage = (DIR) =>
  multer({
    storage: storage(DIR),
    fileFilter: (req, file, cb) => {
      if (
        file.mimetype == "image/png" ||
        file.mimetype == "image/jpg" ||
        file.mimetype == "image/jpeg"
      ) {
        cb(null, true);
      } else {
        cb(null, false);
        return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
      }
    },
    limits: { fileSize: 5 * 1024 * 1024 }, // 5mb
  });

module.exports = {
  uploadImage,
};
