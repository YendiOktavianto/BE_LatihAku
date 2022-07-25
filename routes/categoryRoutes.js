const express = require("express");
const routesCategory = express.Router();
const categoryController = require("../controllers/categoryController");
const { uploadImage } = require("../helper/uploadImage");
const validate = require("../middlewares/validate");
const categoryValidation = require("../validations/categoryValidation");
//category
routesCategory.post(
  "/category/create",
  uploadImage("category").single("image"),
  categoryValidation.createCategory(),
  validate,
  categoryController.create
);
routesCategory.get("/category/list", categoryController.list);
routesCategory.put(
  "/category/update/:id",
  categoryValidation.updateCategory(),
  validate,
  categoryController.update
);
routesCategory.delete(
  "/category/delete/:id",
  categoryValidation.deleteCategory(),
  validate,
  categoryController.delete
);
routesCategory.get(
  "/category/search/:id",
  categoryValidation.searchCategory(),
  validate,
  categoryController.search
);
