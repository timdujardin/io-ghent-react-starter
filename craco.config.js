const path = require("path");

module.exports = {
  webpack: {
    configure: {
      output: {
        publicPath: "",
        filename: "static/js/main.js",
      },
      optimization: {
        runtimeChunk: false,
        splitChunks: {
          chunks() {
            return false;
          },
        },
      },
    },
    alias: {
      "@/components": path.join(__dirname, "src/components"),
    },
  },
};
