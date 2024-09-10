const mongoose = require("mongoose");
const Todo = mongoose.Schema({
  taskName: { type: String },
  taskDescription: { type: String },
  completed: {
    type: Boolean,
    default: false,
  },
});
const Todos = new mongoose.model("Todo", Todo);
module.exports = Todos;
