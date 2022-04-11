/**
 * ------------------------------------------------------------------------------------------------------------------------------------
 * require per "importare"
 * ------------------------------------------------------------------------------------------------------------------------------------
 */

/** Un modulo locale viene importato con ./<nome-del-file> */
const simpleHello = require("./src/simpleModule");

/** Un modulo con path assoluta viene importato con /<path>/<nome-del-file> (SCONSIGLIATO) */
// const simpleHello = require("/Users/rserra/Develop/laboratorio-nodejs-2022/lezione2/commonjs/src/simpleModule.js");

/** L'estensione e' opzionale */

// const simpleHello = require("./src/simpleModule.js");

/** Senza ./ o / indica un node module o un modulo di default */

// const fs = require("fs");

simpleHello("Roberto");

/**
 * ------------------------------------------------------------------------------------------------------------------------------------
 * require funziona anche non a root level file
 * ------------------------------------------------------------------------------------------------------------------------------------
 */

// const coffee = true;

// if (coffee) {
//   const getCoffee = require("./src/maybeModule");
//   getCoffee();
// } else {
//   console.log("418 - I'm a teapot");
// }

/**
 * ------------------------------------------------------------------------------------------------------------------------------------
 * require carica ogni dipendenza man mano trova un require
 * ------------------------------------------------------------------------------------------------------------------------------------
 */
// console.log("Start file");
// const { direct, hit } = require("./src/syncModule");

// direct();

// hit();
