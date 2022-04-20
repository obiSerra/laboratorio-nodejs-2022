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
// chiamate GET su /
app.get("/", (req, res) => {
  // console.log(req);

  console.log(req.query);
  res.send("Hello World!");
});
// Json Response
app.get("/json", (req, res) => {
  res.send({ json: "response" });
});

// Path params
app.post("/:id", (req, res) => {
  console.log("Params", req.params);
  const { id } = req.params;
  res.send({ requestedId: id });
});

// Inizializiamo il server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  // console.log(`Example app listening on ${utils.currentIp()}:${port}`);
});
