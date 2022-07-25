const express = require("express");
const routes = express.Router();
const userController = require("../controllers/userController");
const coachController = require("../controllers/coachController");
const placeController = require("../controllers/placeController");
const categoryController = require("../controllers/categoryController");
const bookingController = require("../controllers/bookingController");
const myCoachController = require("../controllers/myCoachController");
const uploadImagesController = require("../controllers/uploadImagesController");
const uploadImage = require("../helper/uploadImage");
const validate = require("../middlewares/validate");
const userValidation = require("../validations/userValidation");
const coachValidation = require("../validations/coachValidation");
const placeValidation = require("../validations/placeValidation");
const bookingValidation = require("../validations/bookingValidation");
const categoryValidation = require("../validations/categoryValidation");
const myCoachValidation = require("../validations/myCoachValidation");

//user
routes.post(
  "/user/register",
  userValidation.registerUser(),
  validate,
  uploadImage.single("profileImage"),
  userController.register
);
routes.post(
  "/user/login",
  userValidation.loginUser(),
  validate,
  userController.login
);
routes.get("/user/list", userController.list);
routes.put(
  "/user/update/:id",
  userValidation.updateUser(),
  validate,
  uploadImage.single("profileImage"),
  userController.update
);
routes.delete(
  "/user/delete/:id",
  userValidation.deleteUser(),
  validate,
  userController.delete
);
routes.get(
  "/user/search/:id",
  userValidation.searchUser(),
  validate,
  userController.search
);

//coach
routes.post(
  "/coach/register",
  coachValidation.registerCoach(),
  validate,
  coachController.register
);
routes.post(
  "/coach/login",
  coachValidation.loginCoach(),
  validate,
  coachController.login
);
routes.get("/coach/list", coachController.list);
routes.put(
  "/coach/update/:id",
  coachValidation.updateCoach(),
  validate,
  uploadImage.single("profileImage"),
  coachController.update
);
routes.delete(
  "/coach/delete/:id",
  coachValidation.deleteCoach(),
  validate,
  coachController.delete
);
routes.get(
  "/coach/search/:id",
  coachValidation.searchCoach(),
  validate,
  coachController.search
);

//place
routes.get("/place/list", placeController.list);
routes.post(
  "/place/create",
  placeValidation.createPlace(),
  validate,
  uploadImage.array("images", 5),
  placeController.update
);
routes.put(
  "/place/update/:id",
  placeValidation.updatePlace(),
  validate,
  uploadImage.array("images", 5),
  placeController.update
);
routes.delete(
  "/place/delete/:id",
  placeValidation.deletePlace(),
  validate,
  placeController.delete
);
routes.get(
  "/place/search/:id",
  placeValidation.searchPlace(),
  validate,
  placeController.search
);

//booking
routes.post(
  "/booking/create",
  bookingValidation.createBooking(),
  validate,
  bookingController.create
);
routes.get("/booking/list", bookingController.list);
routes.put(
  "/booking/update/:id",
  bookingValidation.updateBooking(),
  validate,
  bookingController.update
);
routes.get(
  "/booking/search/:id",
  bookingValidation.searchBooking(),
  validate,
  bookingController.search
);
routes.delete(
  "/booking/update/:id",
  bookingValidation.deleteBooking(),
  validate,
  bookingController.delete
);

//category
routes.post(
  "/category/create",
  categoryValidation.createCategory(),
  validate,
  categoryController.create
);
routes.get("/category/list", categoryController.list);
routes.put(
  "/category/update/:id",
  categoryValidation.updateCategory(),
  validate,
  categoryController.update
);
routes.delete(
  "/category/delete/:id",
  categoryValidation.deleteCategory(),
  validate,
  categoryController.delete
);
routes.get(
  "/category/search/:id",
  categoryValidation.searchCategory(),
  validate,
  categoryController.search
);

//myCoach
routes.post(
  "/myCoach/create",
  myCoachValidation.createMyCoach(),
  validate,
  myCoachController.create
);
routes.get("/myCoach/list", myCoachController.list);
routes.put(
  "/myCoach/update/:id",
  myCoachValidation.updateMyCoach(),
  validate,
  myCoachController.update
);
routes.delete(
  "/myCoach/delete/:id",
  myCoachValidation.deleteMyCoach(),
  validate,
  myCoachController.delete
);
routes.get(
  "/myCoach/search/:id",
  myCoachValidation.searchMyCoach(),
  validate,
  myCoachController.search
);

// upload image
routes.post("/image/oneImage", uploadImagesController.uploadOneImage);
routes.post("/image/multipleImage", uploadImagesController.uploadMultipleImage);
module.exports = routes;
