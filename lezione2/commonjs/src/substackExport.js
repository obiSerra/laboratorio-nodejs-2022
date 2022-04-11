

// writer(“nodejs”) -> nodejs!!!
// writer.hello(“roberto”) -> hello roberto
// writer.byebye(“roberto”) -> bye roberto, see you later




/**
 * ------------------------------------------------------------------------------------------------------------------------------------
 * Substack exports
 * ------------------------------------------------------------------------------------------------------------------------------------
 */

/** Export di una funzione "principale" */
module.exports = (msg) => {
    console.log(msg)
}

/** Export di una altre named functions */
module.exports.warning = (msg) => {
    console.log(`WARN ${msg}`)
}