const path = require("path");
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = (baseConfig, env, defaultConfig) => {
  // Extend defaultConfig as you need.

  // For example, add typescript loader:
  defaultConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: path.resolve(__dirname, "../src"),
    loader: require.resolve("ts-loader")
  });
  defaultConfig.plugins.push(new TsconfigPathsPlugin({ configFile: path.resolve(__dirname, '../tsconfig.json') }))
  defaultConfig.resolve.extensions.push(".ts", ".tsx");
  defaultConfig.resolve.modules.push('src');

  return defaultConfig;
};
