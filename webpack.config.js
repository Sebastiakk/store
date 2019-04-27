const path = require('path'); // Plugin para resolver los separadores de las rutas 
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Plugin para generar un HTMl a partir de una base
const TerserPlugin = require('terser-webpack-plugin'); // Plugin para limpiar los comentarios de la app

module.exports = {
  mode: 'development',
  entry: {// Entrada de los modulos
    css: path.join(__dirname, 'app', 'styles', 'index.js'), // Aqui esta toda la app
    app: path.join(__dirname, 'app', 'scripts', 'app.module.js'), // Aqui estan todos los estilos
  },
  output: {// Directorio donde estara al app a la hora de hacer el build
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
      {//loader de css y stilos
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {// loader de html
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }]
      }, {// loader de imagenes
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
  plugins: [ // plugin del HTml y su base
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, 'app', 'views', 'index.html'),
      favicon: path.join(__dirname, 'app', 'images', 'logo.png'),
      minify: true,
      // inject: 'head'
    })
  ],
  devServer: { // Informacion del servidor cuando, se ejecuta con npm run
    contentBase: path.join('/dist/'),
    inline: true,
    port: 1103,
    open: true,
    historyApiFallback: true
  }
};