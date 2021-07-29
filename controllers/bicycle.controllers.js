const Bicycle = require("../models/bicycles.js");

module.exports = {
  addBicycle: async function (req, res) {
    const bicycle = new Bicycle({
      name: req.body.name,
      type: req.body.type,
      color: req.body.color,
      wheelSize: req.body.wheelSize,
      price: req.body.price,
      description: req.body.description,
    });
    try {
      const savedBicycle = await bicycle.save();
      res.json(savedBicycle);
    } catch (err) {
      res.json({ message: err });
    }
  },

  getAllBicycles: async function (req, res) {
    try {
      const bicycles = await Bicycle.find();
      res.json(bicycles);
    } catch (err) {
      res.json({ message: err });
    }
  },

  removeBicycle: async function (req, res) {
    try {
      const deletedBicycle = await Bicycle.deleteOne({ _id: req.params.id });
      res.json(deletedBicycle);
    } catch (err) {
      res.json({ message: err });
    }
  },

  removeAll: async function (req, res) {
    try {
      const deletedBicycles = await Bicycle.deleteMany({}, () =>
        console.log("All bicycles has been deleted!")
      );
      res.json(deletedBicycles);
    } catch (err) {
      res.json({ message: err });
    }
  },

  updateBicycle: async function (req, res) {
    try {
      const updatedBicycle = await Bicycle.updateOne(
        { _id: req.params.id },
        {
          $set: {
            name: req.body.name,
            type: req.body.type,
            color: req.body.color,
            wheelSize: req.body.wheelSize,
            price: req.body.price,
            description: req.body.description,
          },
        }
      );
      res.json(updatedBicycle);
    } catch (err) {
      res.json({ message: err });
    }
  },
};
