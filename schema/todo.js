const mongoose=require("mongoose")
const Todo = mongoose.Schema({
  taskName: { type: String },
  taskDescription: { type: String },
});
const Todos = new mongoose.model("Todo", Todo);
module.exports = Todos;