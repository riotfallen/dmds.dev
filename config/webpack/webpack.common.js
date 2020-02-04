const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: "/node_modules/",
                loader: "babel-loader",
                query: {
                    presets: ["@babel/preset-env"]
                }
            },
            {
                test: /\.css$/i,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.html$/,
                loader: "html-loader",
                options: {minimize: true}
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html"
        })
    ]
};