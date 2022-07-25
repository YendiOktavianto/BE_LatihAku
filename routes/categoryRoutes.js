const express = require("express");
const routesCategory = express.Router();
const categoryController = require("../controllers/categoryController");
const { verifyToken } = require("../helper/jwt");
const { uploadImage } = require("../helper/uploadImage");
const validate = require("../middlewares/validate");
const categoryValidation = require("../validations/categoryValidation");
//category
routesCategory.post(
  "/create",
  uploadImage("category").single("image"),
  categoryValidation.createCategory(),
  validate,
  categoryController.create
);
routesCategory.get("/list", categoryController.list);
routesCategory.put(
  "/update/:id",
  categoryValidation.updateCategory(),
  validate,
  categoryController.update
);

routesCategory.delete(
  "/delete/:id",
  categoryValidation.deleteCategory(),
  validate,
  categoryController.delete
);

routesCategory.get(
  "/search/:id",
  categoryValidation.searchCategory(),
  validate,
  categoryController.search
);

module.exports = routesCategory;
