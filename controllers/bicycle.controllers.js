const Bicycle = require("../models/bicycle.js");

module.exports = {
  addBicycle: async function (req, res) {
    const bicycle = new Bicycle({
      name: req.body.name,
      type: req.body.type,
      color: req.body.color,
      wheelSize: req.body.wheelSize,
      price: req.body.price,
      description: req.body.description,
      status: req.body.status,
    });
    try {
      const savedBicycle = await bicycle.save();
      res.status(201).json(savedBicycle);
    } catch (err) {
      res.json({ message: err });
    }
  },

  getAllBicycles: async function (req, res) {
    try {
      const bicycles = await Bicycle.find();
      res.status(200).json(bicycles);
    } catch (err) {
      res.json({ message: err });
    }
  },

  removeBicycle: async function (req, res) {
    try {
      const deletedBicycle = await Bicycle.deleteOne({ _id: req.params.id });
      res.status(200).json(deletedBicycle);
    } catch (err) {
      res.json({ message: err });
    }
  },

  removeAll: async function (req, res) {
    try {
      const deletedBicycles = await Bicycle.deleteMany({}, () =>
        console.log("All bicycles has been deleted!")
      );
      res.status(200).json(deletedBicycles);
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
      res.status(201).json(updatedBicycle);
    } catch (err) {
      res.json({ message: err });
    }
  },

  countOfBicycles: function (req, res) {
    const bicycles = Bicycle.find();
    bicycles.countDocuments((err, count) => {
      if (err) {
        res.json({ message: err });
      } else {
        res.status(200).json(count);
      }
    });
  },

  changeStatus: async function (req, res) {
    try {
      const updatedBicycle = await Bicycle.updateOne(
        { _id: req.params.id },
        {
          $set: {
            status: req.body.status,
          },
        }
      );
      res.status(201).json(updatedBicycle);
    } catch (err) {
      res.json({ message: err });
    }
  },

  getCountAvailable: function (req, res) {
    const bicycles = Bicycle.find({ status: "available" });
    bicycles.countDocuments((err, count) => {
      if (err) {
        res.json({ message: err });
      } else {
        res.status(200).json(count);
      }
    });
  },

  getAvgPrice: async function (req, res) {
    let countPrice = 0;
    const bicycles = Bicycle.find();

    for await (const bicycle of bicycles) {
      countPrice += bicycle.price;
    }

    bicycles.countDocuments((err, count) => {
      if (err) {
        res.json({ message: err });
      } else {
        res.status(200).json(countPrice / count);
      }
    });
  },
};
