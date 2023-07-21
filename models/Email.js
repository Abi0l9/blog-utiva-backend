const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const schema = Schema({
  address: {
    default: "",
    type: String,
  },
});

const Email = model("Email", schema);
module.exports = Email;
