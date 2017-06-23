var webpack = require('webpack');

module.exports = {
  entry: "./src/main.js",
  output: {
    path: __dirname + '/public/build',
    publicPath: "build/",
    filename: "bundle.js"
  },
  // devServer: {
  //     historyApiFallback: true
  // },
  module: {
    loaders: [{
        test: /\.js$/,
        loader: "babel-loader",
        exclude: [/node_modules/, /public/],
        query:
          {
            presets:['react']
          }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader!autoprefixer-loader",
        exclude: [/node_modules/, /public/]
      },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!autoprefixer-loader!less-loader",
        exclude: [/node_modules/, /public/]
      },
      {
        test: /\.gif$/,
        loader: "url-loader?limit=10000&mimetype=image/gif"
      },
      {
        test: /\.jpg$/,
        loader: "url-loader?limit=10000&mimetype=image/jpg"
      },
      {
        test: /\.png$/,
        loader: "url-loader?limit=10000&mimetype=image/png"
      },
      {
        test: /\.svg/,
        loader: "url-loader?limit=26000&mimetype=image/svg+xml"
      },
      {
        test: /\.jsx$/,
        loader: "babel-loader",
        exclude: [/node_modules/, /public/],
        query:
          {
            presets:['react']
          }
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      }
    ]
  }
}