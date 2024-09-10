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
        await task.save()
        res.send("task added successfully")
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})
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
    const { taskId } = req.params;
    let Data = await Todo.findOne({ _id: taskId });
    if (Data) {
      let id = Data._id;
      await Todo.findByIdAndDelete(id);
      res.send("Record removed");
    } else {
      res.status(404).send("Task not found");
    }
  } catch (error) {
    console.log(error.message);
  }
});
module.exports = route;
