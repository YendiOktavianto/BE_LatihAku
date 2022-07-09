const express = require("express");
const routes = express.Router();
const userController = require("../controllers/userController");
const coachController = require("../controllers/coachController");
const placeController = require("../controllers/placeController");
const categoryController = require("../controllers/categoryController");
const bookingController = require("../controllers/bookingController");
const myCoachController = require("../controllers/myCoachController");

//user
routes.post("/register", userController.registerUser);
routes.post("/login", userController.login);
routes.put("/update/:id", userController.register);
routes.delete("/delete/:id", userController.login);
routes.get("/find/:id", userController.register);
routes.get("/findAll", userController.login);

//coach
routes.post("/register", coachController.registerCoach);
routes.post("/login", coachController.login);
routes.put("/update/:id", coachController.register);
routes.delete("/delete/:id", coachController.login);
routes.get("/find/:id", coachController.register);
routes.get("/findAll", coachController.login);

//place
routes.post("/create", placeController.register);
routes.put("/update/:id", placeController.login);
routes.delete("/delete/:id", placeController.register);
routes.get("/find/:id", placeController.login);
routes.get("/findAll", placeController.register);

//booking
routes.post("/create", bookingController.login);
routes.put("/update/:id", bookingController.register);
routes.delete("/delete/:id", bookingController.login);
routes.get("/find/:id", bookingController.login);
routes.get("/findAll", bookingController.register);

//category
routes.post("/create", categoryController.login);
routes.put("/update/:id", categoryController.register);
routes.delete("/delete/:id", categoryController.login);
routes.get("/find/:id", categoryController.login);
routes.get("/findAll", categoryController.register);

//myCoach
routes.post("/create", myCoachController.login);
routes.put("/update/:id", myCoachController.register);
routes.delete("/delete/:id", myCoachController.login);
routes.get("/find/:id", myCoachController.login);
routes.get("/findAll", myCoachController.register);

module.exports = routes;
