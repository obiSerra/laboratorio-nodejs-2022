/**
 * ------------------------------------------------------------------------------------------------------------------------------------
 * Named exports
 * ------------------------------------------------------------------------------------------------------------------------------------
 */
// const lyric = require("./src/namedExport");

// lyric.secondVerse();
// lyric.thirdVerse();

/**
 * ------------------------------------------------------------------------------------------------------------------------------------
 * Substack exports
 * ------------------------------------------------------------------------------------------------------------------------------------
 */
const logger = require('./src/substackExport')

logger("ciao")
logger.warning("attenzione")

/**
 * ------------------------------------------------------------------------------------------------------------------------------------
 * Class exports
 * ------------------------------------------------------------------------------------------------------------------------------------
 */

// const Logger = require("./src/classExportModule");
// const logger = new Logger("lab");
// logger.info("Hello");
// logger.warning("Something happened");


/**
 * ------------------------------------------------------------------------------------------------------------------------------------
 * Instance exports
 * ------------------------------------------------------------------------------------------------------------------------------------
 */

// const labLogger = require("./src/instanceExport");
// labLogger.info("Hello");
// labLogger.warning("Something happened");