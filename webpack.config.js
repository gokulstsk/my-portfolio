const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackHealthPlugin = require("./plugins/health-check/webpack-health-plugin");
const setupDevServer = require("./plugins/visual-edits/dev-server-setup");

const healthPlugin = new WebpackHealthPlugin();

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["./plugins/visual-edits/babel-metadata-plugin.js"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    healthPlugin,
  ],
  devServer: setupDevServer(
    {
      static: {
        directory: path.join(__dirname, "build"),
      },
      historyApiFallback: true,
      port: 8080,
      open: true,
    },
    healthPlugin,
  ),
  mode: "production",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
    extensions: [".js", ".jsx"],
  },
};
