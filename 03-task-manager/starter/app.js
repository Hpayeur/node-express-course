const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const servers = dns.getServers();
console.log("Node.js is using these DNS servers:", servers);

const express = require("express");
const tasks = require("./routes/tasks");
const app = express();
app.get("/hello", (req, res) => {
  res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);

const port = 3000;

app.listen(port, console.log(`Server is listening on port ${port}...`));
