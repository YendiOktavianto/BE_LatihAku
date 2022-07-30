const { validationResult } = require("express-validator");

const validate = (req, res, next) => {
  const errors = validationResult(req.body);

  if (!errors.isEmpty()) {
    //console.log(errors);
    return res.status(400).json({ errors: errors.array() });
  }
  return next();
};

module.exports = validate;
