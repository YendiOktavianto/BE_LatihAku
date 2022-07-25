const { body, param, query } = require("express-validator");

const createBooking = () => [
  param("id").not().isEmpty(),
  body("bookingDate")
    .not()
    .isEmpty()
    .withMessage("Booking Date must be choosed!")
    .isDate()
    .withMessage("Booking Date must be in Valid Date!"),
  body("notes")
    .not()
    .isEmpty()
    .withMessage("Notes must be inserted!")
    .isString()
    .withMessage("Notes must be in String!")
    .isLength({ min: 20, max: 300 })
    .withMessage("Notes Length must be between 20 until 300 Character!"),
];

const updateBooking = () => [
  param("id").not().isEmpty(),
  body("bookingDate")
    .not()
    .isEmpty()
    .withMessage("Booking Date must be choosed!")
    .isDate()
    .withMessage("Booking Date must be in Valid Date!"),
  body("notes")
    .not()
    .isEmpty()
    .withMessage("Notes must be inserted!")
    .isString()
    .withMessage("Notes must be in String!")
    .isLength({ min: 20, max: 300 })
    .withMessage("Notes Length must be between 20 until 300 Character!"),
];

const deleteBooking = () => [param("id").not().isEmpty()];
const searchBooking = () => [param("id").not().isEmpty()];

module.exports = {
  createBooking,
  deleteBooking,
  updateBooking,
  searchBooking,
};
