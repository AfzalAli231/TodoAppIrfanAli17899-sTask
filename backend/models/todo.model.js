const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please title Is Required!"],
  },
  description: {
    type: String,
    required: [true, "Please description Is Required!"],
  },
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "user",
    required: [true, "Please UserId Is Required!"],
  },
  priority: {
    type: String,
    enum: ["Low", "Medium", "High"],
    default: "Low"
  },
  remarks: {
    type: Number,
    default: 0
  },
  status: {
    type: String,
    enum: ["Pending", "Uncompleted", "Completed"],
    default: "Pending"
  }
}, {
    timestamps: true
});

const Todo = mongoose.model("Todo", todoSchema);
module.exports = {Todo}