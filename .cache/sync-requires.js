const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\Users\\Fabbi\\todooblog\\todoblog\\todoBlog\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Users\\Fabbi\\todooblog\\todoblog\\todoBlog\\src\\pages\\404.js"))),
  "component---src-pages-admin-js": hot(preferDefault(require("C:\\Users\\Fabbi\\todooblog\\todoblog\\todoBlog\\src\\pages\\admin.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("C:\\Users\\Fabbi\\todooblog\\todoblog\\todoBlog\\src\\pages\\blog.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Users\\Fabbi\\todooblog\\todoblog\\todoBlog\\src\\pages\\index.js"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("C:\\Users\\Fabbi\\todooblog\\todoblog\\todoBlog\\src\\pages\\using-typescript.tsx")))
}

