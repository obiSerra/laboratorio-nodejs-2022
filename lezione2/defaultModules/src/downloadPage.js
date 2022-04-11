const axios = require("axios"); // modulo installato tramite node modules

module.exports = (url, callback) =>
  axios
    .get(url)
    .then(response => callback(response.data))
    .catch(error => console.error(error));
