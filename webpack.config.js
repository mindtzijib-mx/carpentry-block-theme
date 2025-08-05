/**
 * Custom Webpack configuration for Carpentry Block Theme
 * Extends @wordpress/scripts default config to compile all blocks individually
 */

const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const path = require("path");
const glob = require("glob");

// Get all block entry points dynamically
const blockEntries = {};
const blockPaths = glob.sync("src/*/index.js");

blockPaths.forEach((blockPath) => {
  const blockName = path.basename(path.dirname(blockPath));
  // Skip the main index.js and assets directory
  if (blockName !== "src" && blockName !== "assets") {
    blockEntries[`${blockName}/index`] = path.resolve(process.cwd(), blockPath);
  }
});

module.exports = {
  ...defaultConfig,
  entry: {
    // Main assets bundle
    index: path.resolve(process.cwd(), "src/index.js"),
    // Individual block entries
    ...blockEntries,
  },
  output: {
    ...defaultConfig.output,
    path: path.resolve(process.cwd(), "build"),
  },
};
