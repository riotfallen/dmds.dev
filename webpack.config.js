const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WorkBoxPlugin = require("workbox-webpack-plugin");
const PWAManifestPlugin = require("webpack-pwa-manifest");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const path = require('path');

module.exports = {
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader",
                    options: {minimize: true}
                }]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
        ]
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
        new WorkBoxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true
        }),
        new PWAManifestPlugin({
            name: 'Daily Quote',
            short_name: 'Daily Quote',
            description: 'Free Daily Quote for You',
            background_color: '#ffffff',
            theme_color: '#333333',
            start_url: '/',
            crossorigin: 'anonymous',
            icon: [
                {
                    src: path.resolve('src/icon/icon.png'),
                    sizes: [96, 128, 192, 256, 384, 512]
                },
            ]
        }),
        new FaviconsWebpackPlugin({
            logo: path.resolve('src/icon/icon.png')
        })
    ]
};