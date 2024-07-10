// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const getHTML = require("html-get");
// const browserless = require("browserless")();
// const metascraper = require("metascraper")([
//   require("metascraper-author")(),
//   require("metascraper-date")(),
//   require("metascraper-description")(),
//   require("metascraper-image")(),
//   require("metascraper-logo")(),
//   require("metascraper-clearbit")(),
//   require("metascraper-publisher")(),
//   require("metascraper-title")(),
//   require("metascraper-url")(),
// ]);

// const app = express();
// app.use(bodyParser.json());
// const port = 8085;
// app.use(cors());
// const getContent = async (url) => {
//   // create a browser context inside the main Chromium process
//   const browserContext = browserless.createContext();
//   const promise = getHTML(url, { getBrowserless: () => browserContext });
//   // close browser resources before return the result
//   promise
//     .then(() => browserContext)
//     .then((browser) => browser.destroyContext());
//   return promise;
// };

// app.get("/scrap", async (req, res) => {
//   console.log("scrap call");
//   links = ["https://aslamsarfraz.vercel.app", "https://google.com"];
//   const resultDiv = [];

//   for (let i = 0; i < links.length; i++) {
//     try {
//       console.log(i);
//       const html = await getContent(links[i]);
//       const metadata = await metascraper({ html, url: links[i] });

//       resultDiv.push(metadata);
//       console.log(html, "GG");
//     } catch (e) {
//       console.log("Error while handink this", e);
//     }
//   }
//   await browserless.close();
//   console.log("j", resultDiv);
//   res.json(resultDiv);
// });

// app.listen(port, () => {
//   console.log("Server is running in 8085");
// });

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
  const links = [
    "https://www.apple.com",
    "https://www.microsoft.com",
    "https://www.amazon.com",
    "https://www.google.com",
    "https://www.facebook.com",
    "https://www.alibaba.com",
    "https://www.berkshirehathaway.com",
    "https://www.tesla.com",
    "https://www.jpmorganchase.com",
    "https://www.unitedhealthgroup.com",
    // "https://www.samsung.com",
    // "https://www.nestle.com",
    // "https://www.toyota.com",
    // "https://www.procterandgamble.com",
    // "https://www.disney.com",
    // "https://www.homeDepot.com",
    // "https://www.verizon.com",
    // "https://www.coca-cola.com",
    // "https://www.exxonmobil.com",
    // "https://www.att.com",
    // "https://www.intel.com",
    // "https://www.citigroup.com",
    // "https://www.mastercard.com",
    // "https://www.ibm.com",
    // "https://www.novartis.com",
    // "https://www.pepsico.com",
    // "https://www.pfizer.com",
    // "https://www.abbott.com",
    // "https://www.boeing.com",
    // "https://www.mcdonalds.com",
    // "https://www.nike.com",
    // "https://www.visa.com",
    // "https://www.walmart.com",
    // "https://www.johnsonandjohnson.com",
    // "https://www.chevron.com",
    // "https://www.shell.com",
    // "https://www.costco.com",
    // "https://www.thermofisher.com",
    // "https://www.broadcom.com",
    // "https://www.adobe.com",
    // "https://www.paypal.com",
    // "https://www.salesforce.com",
    // "https://www.netflix.com",
    // "https://www.tsmc.com",
    // "https://www.nvidia.com",
    // "https://www.ab-inbev.com",
    // "https://www.unilever.com",
    // "https://www.loreal.com",
    // "https://www.astrazeneca.com",
    // "https://www.roche.com",
    // "https://www.oracle.com",
    // "https://www.goldmansachs.com",
    // "https://www.morganstanley.com",
    // "https://www.blackrock.com",
    // "https://www.sony.com",
    // "https://www.siemens.com",
    // "https://www.philips.com",
    // "https://www.gsk.com",
    // "https://www.bristolmyers.com",
    // "https://www.bayer.com",
    // "https://www.sanofi.com",
    // "https://www.lvmh.com",
    // "https://www.merck.com",
    // "https://www.bmw.com",
    // "https://www.ford.com",
    // "https://www.kroger.com",
    // "https://www.hsbc.com",
    // "https://www.chinamobileltd.com",
    // "https://www.xiaomi.com",
    // "https://www.huawei.com",
    // "https://www.kweichowmoutai.com",
    // "https://www.pinduoduo.com",
    // "https://www.jd.com",
    // "https://www.bytemodules.com",
    // "https://www.uber.com",
    // "https://www.lyft.com",
    // "https://www.sprint.com",
    // "https://www.t-mobile.com",
    // "https://www.lenovo.com",
    // "https://www.dell.com",
    // "https://www.cisco.com",
    // "https://www.linkedin.com",
    // "https://www.airbnb.com",
    // "https://www.reddit.com",
    // "https://www.shopify.com",
    // "https://www.squarespace.com",
    // "https://www.wix.com",
    // "https://www.autodesk.com",
    // "https://www.zoom.com",
    // "https://www.twitter.com",
    // "https://www.snap.com",
    // "https://www.ebay.com",
    // "https://www.dropbox.com",
    // "https://www.spotify.com",
    // "https://www.samsung.com",
    // "https://www.lg.com",
    // "https://www.nintendo.com",
    // "https://www.intuit.com",
    // "https://www.amd.com",
    // "https://www.quora.com",
    // "https://www.quibi.com",
    // "https://www.tiktok.com",
  ];
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
