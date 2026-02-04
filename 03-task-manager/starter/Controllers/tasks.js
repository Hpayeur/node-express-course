const getAllTasks = (req, res) => {
  res.send("Get all Task Items!");
};

const createTasks = (req, res) => {
  res.json(req.body);
};

const getTasks = (req, res) => {
  res.json({ id: req.params.id });
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
