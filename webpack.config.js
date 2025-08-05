/**
 * Custom Webpack configuration for Carpentry Block Theme
 * Extends @wordpress/scripts default config to add assets compilation
 */

const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const path = require("path");

module.exports = {
  ...defaultConfig,
  entry: {
    ...defaultConfig.entry,
    // Add assets entry point
    index: path.resolve(process.cwd(), "src/index.js"),
  },
  output: {
    ...defaultConfig.output,
    path: path.resolve(process.cwd(), "build"),
  },
};
