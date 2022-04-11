const fs = require("fs");
const path = require("path");
module.exports = () => {
  console.log("Starting execution");

  setTimeout(() => {
    console.log("Execution done");
  }, 1000);
};

module.exports.readFile = onDone => {
  fs.readFile(path.join(".", "data", "server.log"), "utf8", (err, data) => {
    if (err) {
      console.error(error);
      exit(1);
    }
    onDone(data);
  });
};
