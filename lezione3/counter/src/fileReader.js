const fs = require("fs");

class FileReader {
  constructor(fileName) {
    this.fileName = fileName;
  }

  readFile(onDone) {
    fs.readFile(this.fileName, (err, data) => {
      if (err) {
        console.error(err);
        return;
      }

      onDone(data.toString());
    });
  }
}
module.exports = FileReader;

// giusto per testare:

// const reader = new FileReader("./index.js");
// const reader = new FileReader("./counter/index.js");
// console.log(reader.fileName);
// console.log(reader.readFile(file => console.log(file)));
// fs.readFile(FILE_PATH, function (err, data) {

//})
