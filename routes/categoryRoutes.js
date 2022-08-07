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
  verifyToken,
  uploadImage("category").single("image"),
  categoryValidation.createCategory(),
  validate,
  categoryController.create
);
routesCategory.get("/list", verifyToken, categoryController.list);
routesCategory.put(
  "/update/:id",
  categoryValidation.updateCategory(),
  validate,
  categoryController.update
);

routesCategory.delete(
  "/delete/:id",
  verifyToken,
  categoryValidation.deleteCategory(),
  validate,
  categoryController.delete
);

routesCategory.get(
  "/search/:id",
  verifyToken,
  categoryValidation.searchCategory(),
  validate,
  categoryController.search
);

routesCategory.get(
  "/searchByName",
  verifyToken,
  categoryValidation.searchCategoryByName(),
  validate,
  categoryController.searchByName
);

module.exports = routesCategory;
