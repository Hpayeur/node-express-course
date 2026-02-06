const Task = require("../Models/Tasks");
const asyncWrapper = require("../Middleware/Async");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
  res.status(500).json({ msg: error });
});

const createTasks = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
  res.status(500).json({ msg: error });
});
const getTasks = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return res.status(404).json({ msg: `No task with ID: ${taskID}` });
  }
  res.status(200).json({ task });
  res.status(500).json({ msg: error });
});

const updateTasks = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return res.status(404).json({ msg: `No task with ID: ${taskID}` });
  }
  res.status(200).json({ task });
  res.status(500).json({ msg: error });
});

const deleteTasks = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return res.status(404).json({ msg: `No task with Id: ${taskID}` });
  }
  res.status(200).json({ task });
  res.status(500).json({ msg: error });
});

module.exports = {
  getAllTasks,
  createTasks,
  getTasks,
  updateTasks,
  deleteTasks,
};
