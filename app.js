const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

const app = express();
const bicycleRouter = require("./routes/bicycle.routes.js");

app.use(express.json());
app.use(cors());

app.use("/bicycles", bicycleRouter);

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to DB!");
  }
);

app.listen(process.env.PORT || 8000);
