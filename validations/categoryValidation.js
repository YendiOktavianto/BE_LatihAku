const { body, param, query } = require("express-validator");

const createCategory = () => [
  param("id").not().isEmpty(),
  body("name")
    .not()
    .isEmpty()
    .withMessage("Name must be inserted!")
    .isString()
    .withMessage("Name must be in String!")
    .isLength({ min: 3, max: 50 })
    .withMessage("Name length must be between 3 until 50 Character!"),
  body("image").isString().withMessage("Image must be in String!"),
];

const updateCategory = () => [
  param("id").not().isEmpty(),
  body("name")
    .not()
    .isEmpty()
    .withMessage("Name must be inserted!")
    .isString()
    .withMessage("Name must be in String!")
    .isLength({ min: 3, max: 50 })
    .withMessage("Name length must be between 3 until 50 Character!"),
  body("image").isString().withMessage("Image must be in String!"),
];

const deleteCategory = () => [param("id").not().isEmpty()];
const searchCategory = () => [param("id").not().isEmpty()];

module.exports = {
  createCategory,
  deleteCategory,
  updateCategory,
  searchCategory,
};
