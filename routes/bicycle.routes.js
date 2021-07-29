const express = require("express");
const {
  addBicycle,
  getAllBicycles,
  removeBicycle,
  removeAll,
  updateBicycle,
} = require("../controllers/bicycle.controllers.js");

const router = express.Router();

router.post("/", addBicycle);

router.get("/", getAllBicycles);

router.delete("/:id", removeBicycle);

router.delete("/", removeAll);

router.patch("/:id", updateBicycle);

module.exports = router;
