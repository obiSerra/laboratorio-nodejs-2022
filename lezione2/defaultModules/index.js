const os = require("os"); // info at https://nodejs.org/api/os.html
const fs = require("fs"); // info at https://nodejs.org/api/fs.html
const path = require("path"); // info at https://nodejs.org/api/path.html
const process = require("process"); // https://nodejs.org/api/process.html

// os ci permette di interagire con varie funzionalita' del sistema operativo
console.log(os.networkInterfaces());

// process.argv contiene gli argomenti con cui viene chiamato lo script
// 0 -> node
// 1 -> lo script eseguito
// ... -> tutti i vari argomenti
console.log(process.argv);


const downloadPage = require("./src/downloadPage");

const WikiLoader = require("./src/WikiLoader");

const loader = new WikiLoader("India_pale_ale");
const wikiUrl = loader.getUrl();

// console.log(wikiUrl);
// console.log(wikiUrl.host);
// console.log(wikiUrl.href);

downloadPage(wikiUrl.href, page => {
  // una path come "./data/ipa.html" funziona solo su mac, su windows sarebbe ".\data\ipa.html"

  fs.writeFileSync(path.join(".", "data", "ipa.html"), page);
});

process.on("beforeExit", code => {
  console.log("Bye Bye");
});
