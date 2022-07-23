const { body, param, query } = require("express-validator");

const registerUser = () => [
  param("id").notEmpty(),
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

const updateUser = () => [
  param("id").notEmpty(),
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
  param("id").notEmpty(),
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

const deleteUser = () => [param("id").notEmpty()];
const searchUser = () => [param("id").notEmpty()];

module.exports = {
  registerUser,
  deleteUser,
  updateUser,
  searchUser,
  loginUser,
};
