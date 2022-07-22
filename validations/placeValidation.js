const { body, param, query } = require("express-validator");

const createPlace = () => [
  param("id").notEmpty().isUUID(),
  body("name").optional().notEmpty().isString(),
  body("age").optional().notEmpty().isInt(),
  body("gender").optional().notEmpty().isIn(["female", "male"]),
  body("address").optional().notEmpty().isString().isLength({ min: 20 }),
];

const updatePlace = () => [
  param("id").notEmpty().isUUID(),
  body("name").optional().notEmpty().isString(),
  body("age").optional().notEmpty().isInt(),
  body("gender").optional().notEmpty().isIn(["female", "male"]),
  body("address").optional().notEmpty().isString().isLength({ min: 20 }),
];

const deletePlace = () => [
  param("id").notEmpty().isUUID(),
  body("name").optional().notEmpty().isString(),
  body("age").optional().notEmpty().isInt(),
  body("gender").optional().notEmpty().isIn(["female", "male"]),
  body("address").optional().notEmpty().isString().isLength({ min: 20 }),
];

const findOnePlace = () => [
  param("id").notEmpty().isUUID(),
  body("name").optional().notEmpty().isString(),
  body("age").optional().notEmpty().isInt(),
  body("gender").optional().notEmpty().isIn(["female", "male"]),
  body("address").optional().notEmpty().isString().isLength({ min: 20 }),
];

module.exports = {
  createPlace,
  deletePlace,
  updatePlace,
  findOnePlace,
};
