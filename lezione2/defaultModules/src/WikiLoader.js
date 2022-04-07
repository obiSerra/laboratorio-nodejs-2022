const { URL } = require("url"); // info at https://nodejs.org/api/url.html

class WikiLoader {
  constructor(page) {
    this.baseUrl = "https://en.wikipedia.org";
    this.page = page;
  }

  getUrl() {
    return new URL(`${this.baseUrl}/wiki/${this.page}`);
  }
}

module.exports = WikiLoader;
