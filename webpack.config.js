var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: ["webpack/hot/dev-server", "./src/js/scripts.min"],
   module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.json$/, loader: 'json' },
    ]
  },
  output: {
    path: path.join(__dirname + "/src/js"),
    filename: "scripts.min.js",
    publicPath: "/js/"
  },
  plugins: debug ? [
    new webpack.HotModuleReplacementPlugin()

  ] : [

    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};