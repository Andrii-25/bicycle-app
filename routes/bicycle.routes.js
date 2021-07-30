const express = require("express");
const { check, validationResult, oneOf } = require("express-validator");
const {
  addBicycle,
  getAllBicycles,
  removeBicycle,
  removeAll,
  updateBicycle,
  countOfBicycles,
  changeStatus,
  getCountAvailable,
  getAvgPrice,
} = require("../controllers/bicycle.controllers.js");

const router = express.Router();

const validate = (validations) => {
  return async (req, res, next) => {
    await Promise.all(validations.map((validation) => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    res.status(400).json({ errors: errors.array() });
  };
};

const validations = [
  check("name")
    .notEmpty()
    .withMessage("Name field is required")
    .isLength({ min: 5 })
    .withMessage("Minimum length should be 5 characters"),

  check("type")
    .notEmpty()
    .withMessage("Type field is required")
    .isLength({ min: 5 })
    .withMessage("Minimum length should be 5 characters"),

  check("color")
    .notEmpty()
    .withMessage("Color field is required")
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
    .isLength({ min: 5 })
    .withMessage("Minimum length should be 5 characters"),
];

router.post("/", validate(validations), addBicycle);

router.get("/", getAllBicycles);

router.delete("/:id", removeBicycle);

router.delete("/", removeAll);

router.patch("/:id", validate(validations), updateBicycle);

router.get("/count", countOfBicycles);

router.patch(
  "/status/:id",
  validate([
    check("status")
      .notEmpty()
      .withMessage("Status field is required")
      .isLength({ min: 5 })
      .withMessage("Minimum length should be 5 characters"),
  ]),
  changeStatus
);

router.get("/available", getCountAvailable);

router.get("/price/avg", getAvgPrice);

module.exports = router;
