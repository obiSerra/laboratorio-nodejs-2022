/**
 * ------------------------------------------------------------------------------------------------------------------------------------
 * Class export
 * ------------------------------------------------------------------------------------------------------------------------------------
 */

module.exports = class Logger {
  constructor(prefix) {
    this.prefix = prefix;
  }
  info(message) {
    console.log(`${this.prefix} - Info: ${message}`);
  }
  warning(message) {
    console.log(`${this.prefix} - Warning: ${message}`);
  }
};
