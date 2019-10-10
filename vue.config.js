
var path = require('path');
module.exports = {
  outputDir: 'vuecli3',
  publicPath: './',
  devServer: {
    host: 'localhost',
    open: true,
    port: 9000,
  },
  configureWebpack: {
    resolve: { extensions: [".ts", ".tsx", ".js", ".json"] },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
          options: {
            appendTsSuffixTo: [/\.vue$/],
          }
        }
      ]
    }
  }
}
