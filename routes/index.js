const express = require("express");
const route = express.Router();
// const uploadImagesController = require("../controllers/uploadImagesController");

const user = require("./userRoutes");
const coach = require("./coachRoutes");
const myCoach = require("./myCoachRoutes");
const booking = require("./bookingRoutes");
const category = require("./categoryRoutes");
const place = require("./placeRoutes");
const myFavouriteCoach = require("./myFavouriteCoachRoutes");
const myTrainee = require("./myTraineeRoutes");

route.use("/user", user);
route.use("/coach", coach);
route.use("/myCoach", myCoach);
route.use("/booking", booking);
route.use("/category", category);
route.use("/place", place);
route.use("/myFavouriteCoach", myFavouriteCoach);
route.use("/myTraineeCoach", myTrainee);

// // upload image
// routes.post("/image/oneImage", uploadImagesController.uploadOneImage);
// routes.post("/image/multipleImage", uploadImagesController.uploadMultipleImage);

module.exports = route;
