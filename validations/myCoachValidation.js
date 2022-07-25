const { body, param, query } = require("express-validator");

const createMyCoach = () => [
  param("id").not().isEmpty(),
  body("schedule")
    .not()
    .isEmpty()
    .withMessage("Schedule must be choosed!")
    .isDate()
    .withMessage("Schedule must be in Valid Date!"),
  body("timeRemaining")
    .not()
    .isEmpty()
    .withMessage("Time Remaining must be inserted!")
    .isInt({ min: 1 })
    .withMessage("Time Remaining must be in Integer and have minimum value 1!"),
  body("salary")
    .not()
    .isEmpty()
    .withMessage("Salary must be inserted!")
    .isFloat()
    .withMessage("Salary must be in Float!"),
];

const updateMyCoach = () => [
  param("id").not().isEmpty(),
  body("schedule")
    .not()
    .isEmpty()
    .withMessage("Schedule must be choosed!")
    .isDate()
    .withMessage("Schedule must be in Valid Date!"),
  body("timeRemaining")
    .not()
    .isEmpty()
    .withMessage("Time Remaining must be inserted!")
    .isDate({ min: 1 })
    .withMessage("Time Remaining must be in Integer and have minimum value 1!"),
  body("salary")
    .not()
    .isEmpty()
    .withMessage("Salary must be inserted!")
    .isFloat()
    .withMessage("Salary must be in Float!"),
];

const deleteMyCoach = () => [param("id").not().isEmpty()];
const searchMyCoach = () => [param("id").not().isEmpty()];

module.exports = {
  createMyCoach,
  deleteMyCoach,
  updateMyCoach,
  searchMyCoach,
};
