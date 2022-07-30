const { body, param, query } = require("express-validator");

const createMyFavouriteCoach = () => [
  param("id").not().isEmpty(),
  body("favourite")
    .not()
    .isEmpty()
    .withMessage("Favourite must be choosed!")
    .isBoolean()
    .withMessage("Favourite must be in Boolean!"),
];

const updateMyFavouriteCoach = () => [
  param("id").not().isEmpty(),
  body("favourite")
    .not()
    .isEmpty()
    .withMessage("Favourite must be choosed!")
    .isBoolean()
    .withMessage("Favourite must be in Boolean!"),
];

const deleteMyFavouriteCoach = () => [param("id").not().isEmpty()];
const searchMyFavouriteCoach = () => [param("id").not().isEmpty()];
const searchMyFavouriteCoachByName = () => [
  body("name")
    .not()
    .isEmpty()
    .withMessage("Name must be inserted!")
    .isString()
    .withMessage("Name must be in String!"),
];

module.exports = {
  createMyFavouriteCoach,
  updateMyFavouriteCoach,
  deleteMyFavouriteCoach,
  searchMyFavouriteCoach,
  searchMyFavouriteCoachByName,
};
