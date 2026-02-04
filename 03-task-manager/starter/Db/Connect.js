// const connectionString = mongodb+srv://hailpaye017_db_user:Wolves7859@nodeexpress.azrgs6r.mongodb.net/Task-Manager?appName=NodeExpress

const mongoose = require("mongoose");

mongoose
  .connect(connectionString)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB", err));
