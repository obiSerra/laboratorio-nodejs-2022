"use strict";

const utils = require("../utils");

const starting = utils.getNow();

// Questa funzione genera un wait sincrono
async function asyncWait(ms, label) {
  return new Promise((done, reject) => {
    try {
      console.log(`[${label}] Async operation starting after: ${utils.getNow() - starting}ms`);

      setTimeout(() => done(`Done ${label}`), ms);
    } catch (e) {
      reject(e);
    }
  });
}

async function asyncCaller(ms, label) {
  try {
    const ret = await asyncWait(ms, label);
    console.log(ret);
    console.log(`[${label}] Finished in ${utils.getNow() - starting}ms`);
  } catch (e) {
    console.log("ERROR");
  }
}

module.exports = asyncWait;
module.exports.asyncCaller = asyncCaller;

if (require.main === module) {
  asyncCaller(3000, "A");
  asyncCaller(1000, "B");

  console.log(`[-] Next operation starting after: ${utils.getNow() - starting}ms`);
}
