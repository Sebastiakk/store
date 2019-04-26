const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: path.join(__dirname, 'app', 'scripts', 'app.module.js'),
    css: path.join(__dirname, 'app', 'styles', 'index.js'),
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: "[name].js",
    chunkFilename: '[name].js'
  },
  module: {
    rules: [{
        test: /.js?$/,
        include: [
          path.resolve(__dirname, 'app')
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ],
        loader: 'babel-loader',
        query: {
          presets: [
            [
              "@babel/env", {
                "targets": {
                  "browsers": "last 2 chrome versions"
                }
              }
            ]
          ]
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }]
      }, {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [{
          loader: 'file-loader',
          options: {
            options: {
              name: '[name].[ext]',
              outputPath: "img/",
              publicPath: "img/"
            }
          },
        }, ],
      }
    ]
  },
  resolve: {
    extensions: ['.json', '.ts', '.js']
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      automaticNameDelimiter: '.'
    },
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false
          }
        }
      })
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'app', 'views', 'index.html'),
      minify: true
    })
  ],
  devServer: {
    contentBase: path.join('/dist/'),
    inline: true,
    port: 1103,
    open: true,
    historyApiFallback: true
  }
};