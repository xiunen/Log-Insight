const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  entry: {
    common: ['react', 'react-dom', 'redux', 'react-redux', 'react-loadable', 'react-router-dom'],
    app: `./src/index.tsx`
    // app: `./src/index.tsx`
  },
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/'
  },
  mode: isDev ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /tsx$/,
        loader: 'babel-loader',
      },
      {
        test: /\.less$/,
        exclude: /node_modules\/antd/,
        use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: true,
          }
        }, 'less-loader']
      },
      {
        test: /node_modules.*\.css$/,
        use: [
          { loader: "style-loader" },
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          { loader: "css-loader" }
        ]
      },
      {
        test: /\.(png|jpg|gif|eot|woff|svg|ttf)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      },
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      '@': path.resolve(__dirname, "src"),
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify({
        NODE_ENV: isDev ? 'development' : 'production'
      }),
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css",
    })
  ],
  optimization: {
    minimize: !isDev,
    minimizer: [
      new CssMinimizerPlugin(),
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    historyApiFallback: true
  }
};