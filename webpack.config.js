const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        app: ["./src/index.tsx", "./scss/main.scss"],
        vendor: ["react", "moment", "react-router", "react-router-dom", "react-bootstrap"]
    },
    output: {
        filename: "[name].bundle.js",
        path: __dirname + "/public"
    },

    mode: "production",

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: {
          index: 'index.html'
        }
    },

    optimization: {
        splitChunks: {
            chunks: "initial",
        },
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    optimization: {
        minimizer: [
            new UglifyJsPlugin()
        ]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            
            { // sass / scss loader for webpack
                test: /\.(sass|scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /react-icons\/(.)*(.js)$/,
                loader: 'babel-loader',
                query: {
                  presets: ['es2015', 'react']
                }
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ],
};