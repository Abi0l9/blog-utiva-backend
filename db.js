const config = require("./utils/config");
const mongoose = require("mongoose");

mongoose
  .connect(config.DB)
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err.message));
