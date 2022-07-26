const { body, param, query } = require("express-validator");

const registerCoach = () => [
  body("name")
    .not()
    .isEmpty()
    .isString()
    .isLength({ min: 3, max: 100 })
    .withMessage("Please enter your Last Name"),
  body("username")
    .not()
    .isEmpty()
    .isString()
    .isLength({ min: 3, max: 100 })
    .withMessage("Username length must be between 3 until 100 Character!"),
  body("gender")
    .not()
    .isEmpty()
    .isIn(["Female", "Male"])
    .withMessage("Gender must be in Female or Male!"),
  body("phone")
    .not()
    .isEmpty()
    .isString()
    .isLength({ min: 10, max: 13 })
    .withMessage("Phone number length must be between 3 until 100 Character!"),
  body("email")
    .not()
    .isEmpty()
    .isString()
    .isEmail()
    .withMessage("Must be in Email format!"),
  body("password")
    .not()
    .isEmpty()
    .isString()
    .withMessage("Password must be in String"),
  body("profileImage").optional().notEmpty().withMessage("Please Insert Image"),
  body("ktp")
    .not()
    .isEmpty()
    .isString()
    .isLength({ min: 16, max: 16 })
    .withMessage("NIK length must be 16 Character!"),
  body("rating")
    .not()
    .isEmpty()
    .isFloat({ min: 0.0, max: 5.0 })
    .withMessage(
      "Rating must be in Float and Value must be between 0 until 5!"
    ),
  body("description")
    .not()
    .isEmpty()
    .isString()
    .isLength({ min: 20, max: 100 })
    .withMessage("Description Length must be between 20 until 100 Character!"),
  body("address")
    .not()
    .isEmpty()
    .isString()
    .isLength({ min: 20, max: 100 })
    .withMessage("Address Length must be between 20 until 100 Character!"),
  body("favourite")
    .not()
    .isEmpty()
    .isBoolean()
    .withMessage("Favourite must be in Boolean!"),
  body("comments")
    .not()
    .isEmpty()
    .isString()
    .isLength({ min: 20, max: 100 })
    .withMessage("Comments Length must be between 20 until 100 Character!"),
  body("budget")
    .not()
    .isEmpty()
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
  body("fistName")
    .not()
    .isEmpty()
    .withMessage("First Name must be inserted!")
    .isString()
    .withMessage("First Name must be in String!")
    .isLength({ min: 3, max: 100 })
    .withMessage("First Name length must be between 3 until 100 Character!"),
  body("lastName")
    .not()
    .isEmpty()
    .withMessage("Last Name must be inserted!")
    .isString()
    .withMessage("Last Name must be in String!")
    .isLength({ min: 3, max: 100 })
    .withMessage("Last Name length must be between 3 until 100 Character!"),
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
