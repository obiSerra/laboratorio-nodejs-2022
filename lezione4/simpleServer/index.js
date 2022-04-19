const express = require("express");
const app = express();
// Porta su cui gira il nostro server
const port = 3000;

// Static files middleware
app.use(express.static(path.join(__dirname, "static")));

// Request handler
// chiamate GET su /
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", (req, res) => {
  res.send({});
});

// Inizializiamo effettivamente il server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
