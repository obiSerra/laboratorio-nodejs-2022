function someFunction() {
  /**
   * Nota: in questo caso una funzione dichiarata con function
   */
  console.log("quando viene richiamata.");
}

const slowFunction = () => {
  /**
   * Nota2: e una dichiarata con un'arrow function, sono uguali
   */
  console.log("blocca l'esecuzione");
  for (let i = 0; i < 10e9; i++) {}
  console.log("dei task successivi");
};
console.log("Starting");
console.log("Ogni riga");
const elements = ["viene", "eseguita", "dopo", "quella", "precedente"];

elements.forEach(e => console.log(e));

console.log("anche un funzione viene eseguita");
someFunction();

console.log("\n");
console.log("Un task molto lungo");
slowFunction();
