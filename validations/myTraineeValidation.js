const { body, param, query } = require("express-validator");

const createMyTrainee = () => [
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

const updateMyTrainee = () => [
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

const deleteMyTrainee = () => [param("id").not().isEmpty()];
const searchMyTrainee = () => [param("id").not().isEmpty()];
