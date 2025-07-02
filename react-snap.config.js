module.exports = {
  "source": "dist",
  "destination": "dist", 
  "crawlFrom": "routes.txt",
  "puppeteerArgs": ["--no-sandbox", "--disable-setuid-sandbox"],
  "skipThirdPartyRequests": true,
  "cacheAjaxRequests": false,
  "preloadImages": false,
  "minifyHtml": false,
  "removeBlobs": true,
  "fixWebpackChunksIssue": false,
  "asyncScriptTags": true,
  "include": [
    "/",
    "/about",
    "/privacy-policy",
    "/terms", 
    "/faq",
    "/blog",
    "/services/home-office",
    "/services/business",
    "/services/printer",
    "/services/web-hosting",
    "/pricing"
  ]
};