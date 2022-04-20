// Creiamo un nuovo progetto “counter”
// Struttura:
// - index.js
// - package.json
// - src
// --- fileReader.js

// ./src/fileReader.js esporta una classe FileReader con un
// costruttore che prende 1 parametro (file) ed ha un
// metodo readFile a cui possiamo passare una callback
// index.js utilizza quella callback per contare le occorrenze
//del secondo parametro
const process = require("process");
const FileReader = require("./src/fileReader");
if (process.argv.length < 3) {
  console.log("usage $ node <script> file_path");
} else {
  const reader = new FileReader(process.argv[2]);

  const word = "const";

  function countWords(str) {
    let count = 0;
    const lowerText = str.toLowerCase();
    const lowerWord = word.toLowerCase();
    let lastFound = 0;
    while (lastFound > -1) {
      lastFound = lowerText.indexOf(lowerWord, lastFound + word.length);
      if (lastFound > -1) count++;
    }
    console.log(count);
  }

  reader.readFile(countWords);
}
