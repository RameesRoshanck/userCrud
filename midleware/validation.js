const { body, validationResult } = require("express-validator");

const regValidate = [
  //name validation
  body("name")
    .isString()
    .withMessage("name should be string")
    .isLength({ min: 3 })
    .withMessage("Name must conatain minimum 3 characters"),

  // email validation
  body("email").isEmail().withMessage("Provide a valid email"),

  // password validation
  body("password")
    .custom(value => !/\s/.test(value))
    .withMessage('No spaces are allowed in the password')
    .notEmpty()
    .withMessage("Password should not be empty")
    .isLength({ min: 6 })
    .withMessage("Password must conatain minimum 6 letters"),
    
];



const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  } else {
    next();
  }
};

module.exports = { regValidate, validate };