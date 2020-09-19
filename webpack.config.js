const webpack = require("webpack")
var path = require("path");
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap({
  mode: 'development',

  entry: {
    app: ['./src/index.js']
  },
  output: {
    filename: 'main.bundle.js',
    path: path.join(__dirname, 'build')
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: path.join(__dirname, 'build', 'vendor-manifest.json')
    }),
    // new BundleAnalyzerPlugin()
  ]
})
