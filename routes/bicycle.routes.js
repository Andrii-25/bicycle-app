const express = require("express");
const { check } = require("express-validator");
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
const { validations, validate } = require("../utils/bicycle.validations.js");

const router = express.Router();

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
      .isString()
      .withMessage("Status field must be a String")
      .isIn(["available", "busy", "unavailable"])
      .withMessage("The value should be available, busy, or unavailable"),
  ]),
  changeStatus
);

router.get("/available", getCountAvailable);

router.get("/price/avg", getAvgPrice);

module.exports = router;
