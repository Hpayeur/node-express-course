const Task = require("../Models/Tasks");
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createTasks = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getTasks = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskId });
    res.status(200).json({ id: req.params.id });
    if (!task) {
      res.status(404).json({ msg: `No task with ID: ${taskID}` });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTasks = (req, res) => {
  res.send("Updates Tasks!");
};

const deleteTasks = (req, res) => {
  res.send("Deletes Tasks!");
};

module.exports = {
  getAllTasks,
  createTasks,
  getTasks,
  updateTasks,
  deleteTasks,
};
