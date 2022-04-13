const axios = require("axios");

function getPageTitle(onDone) {
  axios.get("https://en.wikipedia.org/wiki/Node.js").then(response => {
    onDone(response.data);
  });
}

console.log("1) Starting");

setTimeout(() => {
  /**
   * Uno dei classici metodi asincroni e' setTimeout, in cui una callback viene eseguita dopo alcuni secondi
   */
  console.log("5) Questa callback viene eseguita dopo 3 secondi (o 3000ms)");
}, 3000);

console.log("2) Il processo non viene bloccato dalla funzione asincrona");

getPageTitle(content => {
  // La prossima riga splitta il testo per riga e scarta tutte le righe che non iniziano con <title>
  const title = content.split("\n").filter(e => e.startsWith("<title>"))[0];
  console.log(`4?) ${title}`);
});
console.log("3) Questo e' molto utile quando si usano risorse esterne");
