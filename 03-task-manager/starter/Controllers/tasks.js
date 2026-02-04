const getAllTasks = (req, res) => {
  res.send("Get all Task Items!");
};

const createTasks = (req, res) => {
  res.send("Lets Create A New Task Item!");
};

const getTasks = (req, res) => {
  res.send("Get A Single Task Item!");
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
