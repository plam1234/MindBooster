const mongoose = require("mongoose");

// Create Schema
const Userschema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
    },
  },
  { strict: false }
);

module.exports = User = mongoose.model("users", Userschema);
