const express = require("express");
const route = express.Router();
const Todo = require("../schema/todo");
require("../conn");

route.get("/", async (req, res) => {
  res.send("home page");
});

route.post("/addtask", async (req, res) => {
  try {
    const { taskName, taskDescription } = req.body;
    const task = new Todo({ taskName, taskDescription });
    await task.save();
    res.send("task added successfully");
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});
route.get("/getTasks", async (req, res) => {
  try {
    const tasks = await Todo.find();
    res.send(tasks);
  } catch (e) {
    console.log(e);
    res.send("empty");
  }
});

route.delete("/deleteTask/:id", async (req, res) => {
  try {
    let id = req.params.id;
    await Todo.findByIdAndDelete(id);
    res.send("Record removed");
  } catch (error) {
    res.status(404).send("Task not found");
    console.log(error.message);
  }
});

route.put("/completeTask/:id", async (req, res) => {
  try {
    const { taskId } = req.params;
    const task = await Todo.findById(taskId);
    if (!task) {
      return res.status(404).send({ message: "task not found" });
    }
    task.completed = true;
    await task.save();
  } catch (error) {
    res.status(500).send({ message: "server error", error: error });
  }
});
module.exports = route;
