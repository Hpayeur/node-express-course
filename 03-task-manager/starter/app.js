require("dotenv").config();
const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const servers = dns.getServers();
console.log("Node.js is using these DNS servers:", servers);

const express = require("express");
const app = express();
const tasks = require("./Routes/tasks");
const connectDB = require("./Db/Connect");
//Middleware
app.use(express.static("./public"));
app.use(express.json());

//Routes

app.use("/api/v1/tasks", tasks);
const port = 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`http://localhost:${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
