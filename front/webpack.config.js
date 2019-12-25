const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "/src/index.html")
    }),
  ],
  devServer: {
    contentBase: path.join(__dirname, '/public'),
    writeToDisk: true,
    public: 'http://reddit.local',
    publicPath: '/',
    hot: false,
    compress: true,
    watchOptions: {
      poll: 1000,
      aggregateTimeout: 300,
    }
}
};
