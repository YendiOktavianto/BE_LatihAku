const { body, param, query } = require("express-validator");

const createPlace = () => [
  param("id").not().isEmpty(),
  body("name")
    .not()
    .isEmpty()
    .withMessage("Owner must be inserted!")
    .isString()
    .withMessage("Name must be in String!")
    .isLength({ min: 3, max: 100 })
    .withMessage("Name length must be between 3 until 100 Character!"),
  body("owner")
    .not()
    .isEmpty()
    .withMessage("Owner must be inserted!")
    .isString()
    .withMessage("Owner must be in String!")
    .isLength({ min: 3, max: 100 })
    .withMessage("Owner length must be between 3 until 100 Character!"),
  body("price")
    .not()
    .isEmpty()
    .withMessage("Price must be inserted!")
    .isFloat({ min: 10000 })
    .withMessage("Price Value minimum Rp. 10.000,00!"),
  body("location")
    .not()
    .isEmpty()
    .withMessage("Location must be inserted!")
    .isString()
    .withMessage("Address must be in String!")
    .isLength({ min: 3, max: 100 })
    .withMessage("Address Length must be between 3 until 100 Character!"),
  body("rating")
    .not()
    .isEmpty()
    .withMessage("Rating must be inserted!")
    .isFloat({ min: 0.0, max: 5.0 })
    .withMessage(
      "Rating must be in Float and Value must be between 0 until 5!"
    ),
  body("description")
    .not()
    .isEmpty()
    .withMessage("Description must be inserted!")
    .isString()
    .withMessage("Description must be in String!")
    .isLength({ min: 20, max: 500 })
    .withMessage("Description Length must be between 20 until 500 Character!"),
  body("favourite")
    .not()
    .isEmpty()
    .withMessage("Favourite must be choosed!")
    .isBoolean()
    .withMessage("Favourite must be in Boolean!"),
  body("images").isString().withMessage("Please Insert Images"),
  body("phone")
    .not()
    .isEmpty()
    .withMessage("Phone number must be inserted!")
    .isString()
    .withMessage("Phone number must be in string!")
    .isLength({ min: 10, max: 13 })
    .withMessage("Phone number length must be between 3 until 100 Character!"),
  body("comments")
    .not()
    .isEmpty()
    .withMessage("Comments must be inserted!")
    .isString()
    .withMessage("Comments must be in String!")
    .isLength({ min: 20, max: 300 })
    .withMessage("Comments Length must be between 20 until 300 Character!"),
];

const updatePlace = () => [
  param("id").not().isEmpty(),
  body("name")
    .not()
    .isEmpty()
    .withMessage("Name must be inserted!")
    .isString()
    .withMessage("Name must be in String!")
    .isLength({ min: 3, max: 100 })
    .withMessage("Name length must be between 3 until 100 Character!"),
  body("owner")
    .not()
    .isEmpty()
    .withMessage("Owner must be inserted!")
    .isString()
    .withMessage("Owner must be in String!")
    .isLength({ min: 3, max: 100 })
    .withMessage("Owner length must be between 3 until 100 Character!"),
  body("price")
    .not()
    .isEmpty()
    .withMessage("Price must be inserted!")
    .isFloat({ min: 10000 })
    .withMessage("Price Value minimum Rp. 10.000,00!"),
  body("location")
    .not()
    .isEmpty()
    .withMessage("Location must be inserted!")
    .isString()
    .withMessage("Address must be in String!")
    .isLength({ min: 3, max: 100 })
    .withMessage("Address Length must be between 3 until 100 Character!"),
  body("rating")
    .not()
    .isEmpty()
    .withMessage("Rating must be inserted!")
    .isFloat({ min: 0.0, max: 5.0 })
    .withMessage(
      "Rating must be in Float and Value must be between 0 until 5!"
    ),
  body("description")
    .not()
    .isEmpty()
    .withMessage("Description must be inserted!")
    .isString()
    .withMessage("Description must be in String!")
    .isLength({ min: 20, max: 500 })
    .withMessage("Description Length must be between 20 until 500 Character!"),
  body("favourite")
    .not()
    .isEmpty()
    .withMessage("Favourite must be choosed!")
    .isBoolean()
    .withMessage("Favourite must be in Boolean!"),
  body("images").isString().withMessage("Please Insert Images"),
  body("phone")
    .not()
    .isEmpty()
    .withMessage("Phone number must be inserted!")
    .isString()
    .withMessage("Phone number must be in string!")
    .isLength({ min: 10, max: 13 })
    .withMessage("Phone number length must be between 3 until 100 Character!"),
  body("comments")
    .not()
    .isEmpty()
    .withMessage("Comments must be inserted!")
    .isString()
    .withMessage("Comments must be in String!")
    .isLength({ min: 20, max: 300 })
    .withMessage("Comments Length must be between 20 until 300 Character!"),
];

const deletePlace = () => [param("id").not().isEmpty()];
const searchPlace = () => [param("id").not().isEmpty()];

module.exports = {
  createPlace,
  deletePlace,
  updatePlace,
  searchPlace,
};
