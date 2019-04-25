const path = require('path');
module.exports = {
  mode: 'development',
  entry: {
    app: path.join(__dirname, 'app', 'scripts', 'app.module.ts')
  },
  watch: true,
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: "[name].js",
    chunkFilename: '[name].js'
  },
  module: {
    rules: [{
        test: /.ts?$/,
        include: [
          path.resolve(__dirname, 'app')
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],
        loader: 'babel-loader',
        query: {
          presets: [
            ["@babel/env", {
              "targets": {
                "browsers": "last 2 chrome versions"
              }
            }]
          ]
        }
      },
      {
        test: /\.ts?$/,
        loader: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: ['.json', '.ts', '.js']
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join('/dist/'),
    inline: true,
    host: '0.0.0.0',
    port: 8080,
  }
};