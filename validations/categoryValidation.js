const { body, param, query } = require("express-validator");

const createCategory = () => [
  param("id").notEmpty().isUUID(),
  body("name").optional().notEmpty().isString(),
  body("age").optional().notEmpty().isInt(),
  body("gender").optional().notEmpty().isIn(["female", "male"]),
  body("address").optional().notEmpty().isString().isLength({ min: 20 }),
];

const updateCategory = () => [
  param("id").notEmpty().isUUID(),
  body("name").optional().notEmpty().isString(),
  body("age").optional().notEmpty().isInt(),
  body("gender").optional().notEmpty().isIn(["female", "male"]),
  body("address").optional().notEmpty().isString().isLength({ min: 20 }),
];

const deleteCategory = () => [
  param("id").notEmpty().isUUID(),
  body("name").optional().notEmpty().isString(),
  body("age").optional().notEmpty().isInt(),
  body("gender").optional().notEmpty().isIn(["female", "male"]),
  body("address").optional().notEmpty().isString().isLength({ min: 20 }),
];

const findOneCategory = () => [
  param("id").notEmpty().isUUID(),
  body("name").optional().notEmpty().isString(),
  body("age").optional().notEmpty().isInt(),
  body("gender").optional().notEmpty().isIn(["female", "male"]),
  body("address").optional().notEmpty().isString().isLength({ min: 20 }),
];

module.exports = {
  createCategory,
  deleteCategory,
  updateCategory,
  findOneCategory,
};
