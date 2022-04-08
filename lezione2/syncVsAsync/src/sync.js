const process = require("process");
const fs = require("fs");
const path = require("path");

module.exports = () => {
  console.log("Starting execution");

  for (let i = 0; i < 10e5; i++) {
    process.stdout.write("..");
    process.stdout.cursorTo(1);
  }
  process.stdout.write("\n");
  console.log("Execution done");
};

module.exports.readFile = () => {
  const fileContent = fs.readFileSync(path.join(".", "data", "server.log"), { encoding: "utf8", flag: "r" });
  return fileContent;
};
