var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: {
    main: "./src/admin/main.js",
    styles: "./src/admin/styles/index.js"
  },
  output: {
    path: path.resolve(__dirname, "./public/lib"),
    publicPath: "/src/admin/",
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          "vue-style-loader",
          "css-loader",
          "svg-fill-loader/encodeSharp",
          "sass-loader"
        ]
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {
            scss: [
              "vue-style-loader",
              "css-loader",
              "sass-loader",
              {
                loader: "sass-resources-loader",
                options: {
                  resources: [
                    "./src/admin/styles/variables.scss",
                    "./src/admin/styles/mixins.scss"
                  ]
                }
              }
            ]
          }
        }
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]?[hash]"
        }
      },
      {
        test: /\.svg$/,
        use: [
          "url-loader",
          {
            loader: "svg-fill-loader?fill=#fff"
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.esm.js",
      styles: path.resolve(__dirname, "src/admin/styles/components/"),
      images: path.resolve(__dirname, "src/admin/assets/img/")
    },
    extensions: ["*", ".js", ".vue", ".json"]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: false,
    overlay: true,
    open: false
  },
  performance: {
    hints: false
  },
  devtool: "#eval-source-map"
};

if (process.env.NODE_ENV === "production") {
  module.exports.devtool = "#source-map";
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]);
}
