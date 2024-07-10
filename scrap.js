const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const getHTML = require("html-get");
const browserless = require("browserless")();
const metascraper = require("metascraper")([
  require("metascraper-author")(),
  require("metascraper-date")(),
  require("metascraper-description")(),
  require("metascraper-image")(),
  require("metascraper-logo")(),
  require("metascraper-clearbit")(),
  require("metascraper-publisher")(),
  require("metascraper-title")(),
  require("metascraper-url")(),
]);

const app = express();
app.use(bodyParser.json());
const port = 8085;
app.use(cors());

const getContent = (url) => {
  const browserContext = browserless.createContext();
  const promise = getHTML(url, { getBrowserless: () => browserContext });
  promise
    .then(() => browserContext)
    .then((browser) => browser.destroyContext());
  return promise;
};

app.get("/scrap", (req, res) => {
  const { link } = req.query;

  let chain = Promise.resolve();

  chain = chain
    .then(() => {
      return getContent(link);
    })
    .then(metascraper)
    .then((metadata) => {
      console.log("ad", metadata);
      res.json([metadata]);

      setTimeout(() => {
        console.log("let wait 5sec");
      }, 5000);
    })
    .catch((e) => {
      console.log("Error while handling this", e);
    });

  chain;
});

app.listen(port, () => {
  console.log("Server is running on port 8085");
});
