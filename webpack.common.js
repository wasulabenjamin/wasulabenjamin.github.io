const path = require("path");

module.exports = {
  entry: {
    app: "./assets/js/wasulabenjamin.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
    filename: "./assets/js/wasulabenjamin.js",
  },
};
