const express = require("express");
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

router.post("/", addBicycle);

router.get("/", getAllBicycles);

router.delete("/:id", removeBicycle);

router.delete("/", removeAll);

router.patch("/:id", updateBicycle);

router.get("/count", countOfBicycles);

router.patch("/status/:id", changeStatus);

router.get("/available", getCountAvailable);

router.get("/price/avg", getAvgPrice);

module.exports = router;
