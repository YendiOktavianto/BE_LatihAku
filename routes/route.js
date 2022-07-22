const express = require("express");
const routes = express.Router();
const userController = require("../controllers/userController");
const coachController = require("../controllers/coachController");
const placeController = require("../controllers/placeController");
const categoryController = require("../controllers/categoryController");
const bookingController = require("../controllers/bookingController");
const myCoachController = require("../controllers/myCoachController");
const uploadImagesController = require("../controllers/uploadImagesController");
const { uploadImage } = require("../helper/uploadImage");
const validate = require("../middlewares/validate");

//user
routes.post(
  "/user/register",
  registerUser(),
  validate,
  uploadImage.single("profileImage"),
  userController.register
);
routes.post("/user/login", userController.login);
routes.get("/user/list", userController.list);
routes.put(
  "/user/update/:id",
  uploadImage.single("profileImage"),
  userController.update
);
routes.delete("/user/delete/:id", userController.delete);
routes.get("/user/search/:id", userController.search);

//coach
routes.post("/coach/register", coachController.register);
routes.post("/coach/login", coachController.login);
routes.get("/coach/list", coachController.list);
routes.put(
  "/coach/update/:id",
  uploadImage.single("profileImage"),
  coachController.update
);
routes.delete("/coach/delete/:id", coachController.delete);
routes.get("/coach/search/:id", coachController.search);

//place
routes.get("/place/list", placeController.list);
routes.post(
  "/place/create",
  uploadImage.array("images", 5),
  placeController.update
);
routes.put(
  "/place/update/:id",
  uploadImage.array("images", 5),
  placeController.update
);
routes.delete("/place/delete/:id", placeController.delete);
routes.get("/place/search/:id", placeController.search);

//booking
routes.post("/booking/create", bookingController.create);
routes.get("/booking/list", bookingController.list);
routes.put("/booking/update/:id", bookingController.update);
routes.get("/booking/search/:id", bookingController.search);
routes.delete("/booking/update/:id", bookingController.delete);

//category
routes.post("/category/create", categoryController.create);
routes.get("/category/list", categoryController.list);
routes.put("/category/update/:id", categoryController.update);
routes.delete("/category/delete/:id", categoryController.delete);
routes.get("/category/search/:id", categoryController.search);

//myCoach
routes.post("/myCoach/create", myCoachController.create);
routes.get("/myCoach/list", myCoachController.list);
routes.put("/myCoach/update/:id", myCoachController.update);
routes.delete("/myCoach/delete/:id", myCoachController.delete);
routes.get("/myCoach/search/:id", myCoachController.search);

// upload image
routes.post("/image/oneImage", uploadImagesController.uploadOneImage);
routes.post("/image/multipleImage", uploadImagesController.uploadMultipleImage);
module.exports = routes;
