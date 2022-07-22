const { body, param, query } = require("express-validator");

const registerUser = () => [
  param("id").notEmpty().isUUID(),
  body("name").optional().notEmpty().isString(),
  body("age").optional().notEmpty().isInt(),
  body("gender").optional().notEmpty().isIn(["female", "male"]),
  body("address").optional().notEmpty().isString().isLength({ min: 20 }),
];

const updateUser = () => [
  param("id").notEmpty().isUUID(),
  body("name")
    .optional()
    .notEmpty()
    .isString()
    .withMessage("must be at least 5 chars long"),
  body("age").optional().notEmpty().isInt(),
  body("gender").optional().notEmpty().isIn(["female", "male"]),
  body("address").optional().notEmpty().isString().isLength({ min: 20 }),
];

const deleteUser = () => [
  param("id").notEmpty().isUUID(),
  body("name").optional().notEmpty().isString(),
  body("age").optional().notEmpty().isInt(),
  body("gender").optional().notEmpty().isIn(["female", "male"]),
  body("address").optional().notEmpty().isString().isLength({ min: 20 }),
];

const findOneUser = () => [
  param("id").notEmpty().isUUID(),
  body("name").optional().notEmpty().isString(),
  body("age").optional().notEmpty().isInt(),
  body("gender").optional().notEmpty().isIn(["female", "male"]),
  body("address").optional().notEmpty().isString().isLength({ min: 20 }),
];

module.exports = {
  registerUser,
  deleteUser,
  updateUser,
  findOneUser,
};
