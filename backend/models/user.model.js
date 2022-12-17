const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please firstName Is Required!"],
    },
    lastName: {
      type: String,
      required: [true, "Please lastName Is Required!"],
    },
    email: {
      type: String,
      required: [true, "Please email Is Required!"],
    },
    password: {
      type: String,
      required: [true, "Please password Is Required!"],
    },
    isAdmin: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true,
  }
);

const user = mongoose.model("user", userSchema);
module.exports = { user };
