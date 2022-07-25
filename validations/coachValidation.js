const { body, param, query } = require("express-validator");

const registerCoach = () => [
  body("name")
    .optional()
    .notEmpty()
    .isString()
    .isLength({ min: 3, max: 100 })
    .withMessage("Name length must be between 3 until 100 Character!"),
  body("username")
    .optional()
    .notEmpty()
    .isString()
    .isLength({ min: 3, max: 100 })
    .withMessage("Username length must be between 3 until 100 Character!"),
  body("gender")
    .optional()
    .notEmpty()
    .isIn(["Female", "Male"])
    .withMessage("Gender must be in Female or Male!"),
  body("phone")
    .optional()
    .notEmpty()
    .isString()
    .isLength({ min: 10, max: 13 })
    .withMessage("Phone number length must be between 3 until 100 Character!"),
  body("email")
    .optional()
    .notEmpty()
    .isString()
    .isEmail()
    .withMessage("Must be in Email format!"),
  body("password")
    .optional()
    .notEmpty()
    .isString()
    .withMessage("Password must be in String"),
  body("profileImage").isString().withMessage("Please Insert Image"),
  body("ktp")
    .optional()
    .notEmpty()
    .isString()
    .isLength({ min: 16, max: 16 })
    .withMessage("NIK length must be 16 Character!"),
  body("rating")
    .optional()
    .notEmpty()
    .isFloat({ min: 0.0, max: 5.0 })
    .withMessage(
      "Rating must be in Float and Value must be between 0 until 5!"
    ),
  body("description")
    .optional()
    .notEmpty()
    .isString()
    .isLength({ min: 20, max: 100 })
    .withMessage("Description Length must be between 20 until 100 Character!"),
  body("address")
    .optional()
    .notEmpty()
    .isString()
    .isLength({ min: 20, max: 100 })
    .withMessage("Address Length must be between 20 until 100 Character!"),
  body("favourite")
    .optional()
    .notEmpty()
    .isBoolean()
    .withMessage("Favourite must be in Boolean!"),
  body("comments")
    .optional()
    .notEmpty()
    .isString()
    .isLength({ min: 20, max: 100 })
    .withMessage("Comments Length must be between 20 until 100 Character!"),
  body("budget")
    .optional()
    .notEmpty()
    .isFloat({ min: 10000 })
    .withMessage("Budget Value minimum Rp. 10.000,00!"),
];

const loginCoach = () => [
  body("username")
    .not()
    .isEmpty()
    .withMessage("Username must be inserted!")
    .isString()
    .withMessage("Username must be in String!")
    .isLength({ min: 3, max: 100 })
    .withMessage("Username length must be between 3 until 100 Character!"),
  body("password")
    .not()
    .isEmpty()
    .withMessage("Password must be inserted!")
    .isString()
    .withMessage("Password must be in String"),
];

const updateCoach = () => [
  param("id").not().isEmpty(),
  body("name")
    .not()
    .isEmpty()
    .withMessage("Name must be inserted!")
    .isString()
    .withMessage("Name must be in String!")
    .isLength({ min: 3, max: 100 })
    .withMessage("Name length must be between 3 until 100 Character!"),
  body("username")
    .not()
    .isEmpty()
    .withMessage("Username must be inserted!")
    .isString()
    .withMessage("Username must be in String!")
    .isLength({ min: 3, max: 100 })
    .withMessage("Username length must be between 3 until 100 Character!"),
  body("gender")
    .not()
    .isEmpty()
    .withMessage("Gender must be inserted!")
    .isIn(["Female", "Male"])
    .withMessage("Gender must be in Female or Male!"),
  body("phone")
    .not()
    .isEmpty()
    .withMessage("Phone number must be inserted!")
    .isString()
    .withMessage("Phone number must be in string!")
    .isLength({ min: 10, max: 13 })
    .withMessage("Phone number length must be between 3 until 100 Character!"),
  body("email")
    .not()
    .isEmpty()
    .withMessage("Email must be inserted!")
    .isString()
    .withMessage("Email must be in string!")
    .isEmail()
    .withMessage("Must be in Email format!"),
  body("password")
    .not()
    .isEmpty()
    .withMessage("Password must be inserted!")
    .isString()
    .withMessage("Password must be in String"),
  body("profileImage").isString().withMessage("Please Insert Image"),
  body("ktp")
    .not()
    .isEmpty()
    .withMessage("NIK must be inserted!")
    .isString()
    .withMessage("NIK must be in String!")
    .isLength({ min: 16, max: 16 })
    .withMessage("NIK length must be 16 Character!"),
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
    .isLength({ min: 20, max: 100 })
    .withMessage("Description Length must be between 20 until 100 Character!"),
  body("address")
    .not()
    .isEmpty()
    .withMessage("Address must be inserted!")
    .isString()
    .withMessage("Address must be in String!")
    .isLength({ min: 20, max: 100 })
    .withMessage("Address Length must be between 20 until 100 Character!"),
  body("favourite")
    .not()
    .isEmpty()
    .withMessage("Favourite must be choosed!")
    .isBoolean()
    .withMessage("Favourite must be in Boolean!"),
  body("comments")
    .not()
    .isEmpty()
    .withMessage("Comments must be inserted!")
    .isString()
    .withMessage("Comments must be in String!")
    .isLength({ min: 20, max: 100 })
    .withMessage("Comments Length must be between 20 until 100 Character!"),
  body("budget")
    .not()
    .isEmpty()
    .withMessage("Budget must be inserted!")
    .isFloat({ min: 10000 })
    .withMessage("Budget Value minimum Rp. 10.000,00!"),
];

const deleteCoach = () => [param("id").not().isEmpty()];
const searchCoach = () => [param("id").not().isEmpty()];

module.exports = {
  registerCoach,
  deleteCoach,
  updateCoach,
  searchCoach,
  loginCoach,
};
