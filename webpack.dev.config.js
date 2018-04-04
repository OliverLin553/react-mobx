const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.config.js");

module.exports = merge(common, {
  devServer: {
    hot: true,
    historyApiFallback: true,
    // host: "dev.qa-beta.theknot.com",
    port: 4000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000/',
        pathRewrite: function (path, req) {
          var newPath = path;
          var queryDelimiter = path.includes('?') ? '&' : '?';
          return `${newPath}${queryDelimiter}` ;
        },
        secure: false,
        logLevel: 'debug'
      }
    }
  },
  devtool: "source-map",
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});