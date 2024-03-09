import path from "path";
// import { fileURLToPath } from "url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

const config: webpack.Configuration = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "index.ts"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name].[contenthash].js",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
    }),
    new webpack.ProgressPlugin(),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};

export default config;
