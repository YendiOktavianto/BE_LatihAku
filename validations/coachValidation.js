const { body, param, query } = require("express-validator");

const createCoach = () => [
  param("id").notEmpty().isUUID(),
  body("name").optional().notEmpty().isString(),
  body("age").optional().notEmpty().isInt(),
  body("gender").optional().notEmpty().isIn(["female", "male"]),
  body("address").optional().notEmpty().isString().isLength({ min: 20 }),
];

const updateCoach = () => [
  param("id").notEmpty().isUUID(),
  body("name").optional().notEmpty().isString(),
  body("age").optional().notEmpty().isInt(),
  body("gender").optional().notEmpty().isIn(["female", "male"]),
  body("address").optional().notEmpty().isString().isLength({ min: 20 }),
];

const deleteCoach = () => [
  param("id").notEmpty().isUUID(),
  body("name").optional().notEmpty().isString(),
  body("age").optional().notEmpty().isInt(),
  body("gender").optional().notEmpty().isIn(["female", "male"]),
  body("address").optional().notEmpty().isString().isLength({ min: 20 }),
];

const findOneCoach = () => [
  param("id").notEmpty().isUUID(),
  body("name").optional().notEmpty().isString(),
  body("age").optional().notEmpty().isInt(),
  body("gender").optional().notEmpty().isIn(["female", "male"]),
  body("address").optional().notEmpty().isString().isLength({ min: 20 }),
];

module.exports = {
  createCoach,
  deleteCoach,
  updateCoach,
  findOneCoach,
};
