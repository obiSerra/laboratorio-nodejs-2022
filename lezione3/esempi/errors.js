"use strinct";
const process = require("process");
const utils = require("../utils");

const starting = utils.getNow();

function tresholdWait(ms, cb) {
  if (ms < 200) {
    // Se chiamiamo immediatamente la callback, abbiamo dei problemi perche' stiamo mischiando sync e async
    //cb(); // WRONG
    // se vogliamo che una cosa venga immediatamente eseguita, possiamo usare setImmediate, setTimeout con zero millisecondi oppure process.nextTick
    setImmediate(cb);
    //process.nextTick(cb)
  } else {
    setTimeout(cb, ms);
  }
}

//tresholdWaitWRONG(100, () => console.log(`finished after: ${utils.getNow() - starting}ms\n`))
let label = "";

tresholdWait(100, () => {
  console.log(`${label} finished after: ${utils.getNow() - starting}ms\n`);

  tresholdWait(400, () => {
    console.log(`${label} finished after: ${utils.getNow() - starting}ms\n`);
  });
});

label = "hello";
