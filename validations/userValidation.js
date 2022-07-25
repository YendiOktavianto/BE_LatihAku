const { body, param, query } = require("express-validator");

const registerUser = () => [
  body("fistName")
    .optional()
    .notEmpty()
    .isString()
    .isLength({ min: 3, max: 100 })
    .withMessage("Please enter your First Name"),
  body("lastName")
    .optional()
    .notEmpty()
    .isString()
    .isLength({ min: 3, max: 100 })
    .withMessage("Please enter your First Name"),
  body("username")
    .optional()
    .notEmpty()
    .isString()
    .isLength({ min: 3, max: 100 })
    .withMessage("Please enter your Username"),
  body("gender").optional().notEmpty().isString().isIn(["Female", "Male"]),
  body("phoneNumber")
    .optional()
    .notEmpty()
    .isString()
    .isLength({ min: 10, max: 13 })
    .withMessage("Please enter your Phone Number"),
  body("email")
    .optional()
    .notEmpty()
    .isString()
    .isEmail()
    .withMessage("Please enter your Email"),
  body("password")
    .optional()
    .notEmpty()
    .isString()
    .withMessage("Please enter your Password"),
  body("profileImage").optional().isString().withMessage("Please Insert Image"),
  body("address")
    .optional()
    .notEmpty()
    .isString()
    .isLength({ min: 20, max: 100 })
    .withMessage("Please enter your Address"),
];

const updateUser = () => [
  param("id").not().isEmpty(),
  body("fistName")
    .optional()
    .notEmpty()
    .isString()
    .isLength({ min: 3, max: 100 })
    .withMessage("Please enter your First Name"),
  body("lastName")
    .optional()
    .notEmpty()
    .isString()
    .isLength({ min: 3, max: 100 })
    .withMessage("Please enter your First Name"),
  body("username")
    .optional()
    .notEmpty()
    .isString()
    .isLength({ min: 3, max: 100 })
    .withMessage("Please enter your Username"),
  body("gender").optional().notEmpty().isString(),
  body("phoneNumber")
    .optional()
    .notEmpty()
    .isString()
    .isLength({ min: 10, max: 13 })
    .withMessage("Please enter your Phone Number"),
  body("email")
    .optional()
    .notEmpty()
    .isString()
    .isEmail()
    .withMessage("Please enter your Email"),
  body("password")
    .optional()
    .notEmpty()
    .isString()
    .withMessage("Please enter your Password"),
  body("profileImage").optional().isString().withMessage("Please Insert Image"),
  body("address")
    .optional()
    .notEmpty()
    .isString()
    .isLength({ min: 20, max: 100 })
    .withMessage("Please enter your Address"),
];

const loginUser = () => [
  body("username")
    .optional()
    .notEmpty()
    .isString()
    .isLength({ min: 3, max: 100 })
    .withMessage("Please enter your Username"),
  body("password")
    .optional()
    .notEmpty()
    .isString()
    .withMessage("Please enter your Password"),
];

const deleteUser = () => [param("id").not().isEmpty()];
const searchUser = () => [param("id").not().isEmpty()];

module.exports = {
  registerUser,
  deleteUser,
  updateUser,
  searchUser,
  loginUser,
};
