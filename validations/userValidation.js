const { body, param, query } = require("express-validator");

const createUser = () => [
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

// const deleteUser = () => [
//   param("id").notEmpty().isUUID(),
//   body("name").optional().notEmpty().isString(),
//   body("age").optional().notEmpty().isInt(),
//   body("gender").optional().notEmpty().isIn(["female", "male"]),
//   body("address").optional().notEmpty().isString().isLength({ min: 20 }),
// ];

// const findOneUser = () => [
//   param("id").notEmpty().isUUID(),
//   body("name").optional().notEmpty().isString(),
//   body("age").optional().notEmpty().isInt(),
//   body("gender").optional().notEmpty().isIn(["female", "male"]),
//   body("address").optional().notEmpty().isString().isLength({ min: 20 }),
// ];

module.exports = {
  createUser,
  deleteUser,
  updateUser,
  findOneUser,
};
