const express = require("express");
const app = express();
const path = require("path");
// const utils = require("../utils")

// Porta su cui gira il nostro server
const port = 3000;

// Static files middleware
app.use(express.static(path.join(__dirname, "static")));
// JSON middleware
app.use(express.json());

// Request handler

app.get("/", (req, res) => {
  // console.log(req);

  res.send("Hello World!");
});

app.get("/sync", (req, res) => {
  console.log("sync received");
  // console.log(req);
  for (let i = 0; i < 10e10; i++) {}

  res.send("Hello World!");
});
app.get("/async", (req, res, next) => {
  console.log('Received')
  setTimeout(() => {
    res.send("Hello World!");
  }, 500);
});

// Inizializiamo il server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  // console.log(`Example app listening on ${utils.currentIp()}:${port}`);
});
