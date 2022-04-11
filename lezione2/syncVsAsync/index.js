/**
 * ------------------------------------------------------------------------------------------------------------------------------------
 * Sync
 * ------------------------------------------------------------------------------------------------------------------------------------
 */

const syncStuff = require("./src/sync");

// syncStuff();
const content = syncStuff.readFile();
console.log(content.length);
console.log("Other Stuff");
// console.log("Le righe successive vengono eseguite dopo");

/**
 * ------------------------------------------------------------------------------------------------------------------------------------
 * Async
 * ------------------------------------------------------------------------------------------------------------------------------------
 */
const asyncStuff = require("./src/async");

// asyncStuff();
// console.log("Intanto vengono eseguite le righe successive");
// asyncStuff.readFile(content => {
//   console.log(content.length);
// });
// console.log("Other Stuff");
