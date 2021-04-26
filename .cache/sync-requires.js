
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/pentafox/Documents/invoice/invoice-generator/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/pentafox/Documents/invoice/invoice-generator/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/home/pentafox/Documents/invoice/invoice-generator/src/pages/index.js")),
  "component---src-pages-login-page-js": preferDefault(require("/home/pentafox/Documents/invoice/invoice-generator/src/pages/loginPage.js"))
}

