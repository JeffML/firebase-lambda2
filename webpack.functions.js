const nodeExternals = require('webpack-node-externals');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  externals: [nodeExternals()],
  plugins: [
    new CopyPlugin([
      { from: 'pgnfen2-0dcc7c57af09.json', to: '../functions-build' },
    ]),
  ],
};
