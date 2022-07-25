const express = require("express");
const routesCategory = express.Router();
const categoryController = require("../controllers/categoryController");
const { verifyToken } = require("../helper/jwt");
const { uploadImage } = require("../helper/uploadImage");
const validate = require("../middlewares/validate");
const categoryValidation = require("../validations/categoryValidation");
//category
routesCategory.post(
  "/category/create",
  verifyToken,
  uploadImage("category").single("image"),
  categoryValidation.createCategory(),
  validate,
  categoryController.create
);

routesCategory.get("/category/list", verifyToken, categoryController.list);

routesCategory.put(
  "/category/update/:id",
  verifyToken,
  categoryValidation.updateCategory(),
  validate,
  categoryController.update
);

routesCategory.delete(
  "/category/delete/:id",
  verifyToken,
  categoryValidation.deleteCategory(),
  validate,
  categoryController.delete
);

routesCategory.get(
  "/category/search/:id",
  verifyToken,
  categoryValidation.searchCategory(),
  validate,
  categoryController.search
);

module.exports = routesCategory;
