const { check, validationResult } = require("express-validator");

module.exports = {
  validations: [
    check("name")
      .notEmpty()
      .withMessage("Name field is required")
      .isString()
      .withMessage("Name field must be a String")
      .isLength({ min: 5 })
      .withMessage("Minimum length should be 5 characters"),

    check("type")
      .notEmpty()
      .withMessage("Type field is required")
      .isString()
      .withMessage("Type field must be a String")
      .isLength({ min: 5 })
      .withMessage("Minimum length should be 5 characters"),

    check("color")
      .notEmpty()
      .withMessage("Color field is required")
      .isString()
      .withMessage("Color field must be a String")
      .isLength({ min: 5 })
      .withMessage("Minimum length should be 5 characters"),

    check("wheelSize")
      .notEmpty()
      .withMessage("WheelSize field is required")
      .isNumeric()
      .withMessage("WheelSize field should accept only number"),

    check("price")
      .notEmpty()
      .withMessage("Price field is required")
      .isNumeric()
      .withMessage("Price field should accept only number"),

    check("description")
      .notEmpty()
      .withMessage("Description field is required")
      .isString()
      .withMessage("Description field must be a String")
      .isLength({ min: 5 })
      .withMessage("Minimum length should be 5 characters"),
  ],

  validate: function (validations) {
    return async (req, res, next) => {
      await Promise.all(validations.map((validation) => validation.run(req)));

      const errors = validationResult(req);
      if (errors.isEmpty()) {
        return next();
      }

      res.status(400).json({ errors: errors.array() });
    };
  },
};
