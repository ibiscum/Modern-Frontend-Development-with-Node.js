import HtmlWebpackPlugin from "html-webpack-plugin";


const babelLoader = {
  loader: "babel-loader",
  options: {
    presets: ["@babel/preset-env", "@babel/preset-react"],
  },
};
const tsLoader = {
  loader: "ts-loader",
  options: {
    transpileOnly: true,
  },
};

export const entry = {
  app: "./src/script.tsx",
};
export const devServer = {
  historyApiFallback: true,
};
export const resolve = {
  extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
};

module.exports = {
    rules: [
    {
      test: /\.scss$/i,
      use: ["style-loader", "css-loader", "sass-loader"],
    },
    {
      test: /\.css$/i,
      use: ["style-loader", "css-loader"],
    },
    {
      test: /\.jsx?$/i,
      use: [babelLoader],
      exclude: /node_modules/,
    },
    {
      test: /\.tsx?$/i,
      use: [babelLoader, tsLoader],
      exclude: /node_modules/,
    },
    {
      exclude: [/^$/, /\.(js|jsx|ts|tsx)$/i, /\.s?css$/i, /\.html$/i, /\.json$/i],
      type: "asset/resource",
    },
  ],
};
export const plugins = [
  new HtmlWebpackPlugin({
    template: "./src/index.html",
  }),
];
