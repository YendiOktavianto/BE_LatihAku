const { body, param, query } = require("express-validator");

const registerUser = () => [
  body("firstName")
    .not()
    .isEmpty()
    .isString()
    .isLength({ min: 3, max: 100 })
    .withMessage("Please enter your First Name"),
  body("lastName")
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
    .withMessage("Please enter your Username"),
  body("gender").optional().notEmpty().isString().isIn(["Female", "Male"]),
  body("phoneNumber")
    .not()
    .isEmpty()
    .isString()
    .isLength({ min: 10, max: 13 })
    .withMessage("Please enter your Phone Number"),
  body("email")
    .not()
    .isEmpty()
    .isString()
    .isEmail()
    .withMessage("Please enter your Email"),
  body("password")
    .not()
    .isEmpty()
    .isString()
    .withMessage("Please enter your Password"),
  body("profileImage").optional().isString().withMessage("Please Insert Image"),
  body("address")
    .not()
    .isEmpty()
    .isString()
    .isLength({ min: 20, max: 100 })
    .withMessage("Please enter your Address"),
];

const updateUser = () => [
  param("id").not().isEmpty(),
  body("fistName")
    .not()
    .isEmpty()
    .isString()
    .isLength({ min: 3, max: 100 })
    .withMessage("Please enter your First Name"),
  body("lastName")
    .not()
    .isEmpty()
    .isString()
    .isLength({ min: 3, max: 100 })
    .withMessage("Please enter your First Name"),
  body("username")
    .not()
    .isEmpty()
    .isString()
    .isLength({ min: 3, max: 100 })
    .withMessage("Please enter your Username"),
  body("gender").optional().notEmpty().isString(),
  body("phoneNumber")
    .not()
    .isEmpty()
    .isString()
    .isLength({ min: 10, max: 13 })
    .withMessage("Please enter your Phone Number"),
  body("email")
    .not()
    .isEmpty()
    .isString()
    .isEmail()
    .withMessage("Please enter your Email"),
  body("password")
    .not()
    .isEmpty()
    .isString()
    .withMessage("Please enter your Password"),
  body("profileImage").isString().withMessage("Please Insert Image"),
  body("address")
    .not()
    .isEmpty()
    .isString()
    .isLength({ min: 20, max: 100 })
    .withMessage("Please enter your Address"),
];

const loginUser = () => [
  body("username")
    .not()
    .isEmpty()
    .isString()
    .isLength({ min: 3, max: 100 })
    .withMessage("Please enter your Username"),
  body("password")
    .not()
    .isEmpty()
    .isString()
    .withMessage("Please enter your Password"),
];

const deleteUser = () => [param("id").not().isEmpty()];
const searchUser = () => [param("id").not().isEmpty()];
const searchUserByName = () => [
  param("id").not().isEmpty(),
  body("firstName")
    .not()
    .isEmpty()
    .isString()
    .isLength({ min: 3, max: 100 })
    .withMessage("Please enter your First Name"),
];

module.exports = {
  registerUser,
  deleteUser,
  updateUser,
  searchUser,
  loginUser,
  searchUserByName,
};
