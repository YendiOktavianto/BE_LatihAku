const { body, param, query } = require("express-validator");

const createBooking = () => [
  param("id").notEmpty().isUUID(),
  body("name").optional().notEmpty().isString(),
  body("age").optional().notEmpty().isInt(),
  body("gender").optional().notEmpty().isIn(["female", "male"]),
  body("address").optional().notEmpty().isString().isLength({ min: 20 }),
];

const updateBooking = () => [
  param("id").notEmpty().isUUID(),
  body("name").optional().notEmpty().isString(),
  body("age").optional().notEmpty().isInt(),
  body("gender").optional().notEmpty().isIn(["female", "male"]),
  body("address").optional().notEmpty().isString().isLength({ min: 20 }),
];

const deleteBooking = () => [
  param("id").notEmpty().isUUID(),
  body("name").optional().notEmpty().isString(),
  body("age").optional().notEmpty().isInt(),
  body("gender").optional().notEmpty().isIn(["female", "male"]),
  body("address").optional().notEmpty().isString().isLength({ min: 20 }),
];

const findOneBooking = () => [
  param("id").notEmpty().isUUID(),
  body("name").optional().notEmpty().isString(),
  body("age").optional().notEmpty().isInt(),
  body("gender").optional().notEmpty().isIn(["female", "male"]),
  body("address").optional().notEmpty().isString().isLength({ min: 20 }),
];

module.exports = {
  createBooking,
  deleteBooking,
  updateBooking,
  findOneBooking,
};
