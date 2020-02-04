const merge = require("webpack-merge");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const WebpackPwaManifestPlugin = require("webpack-pwa-manifest");
const FaviconWebpackPlugin = require("favicons-webpack-plugin");

const common = require("./config/webpack/webpack.common");

const workboxConfig = require("./config/plugin/WorkboxConfig");
const manifestConfig = require("./config/plugin/WebManifestConfig");
const faviconConfig = require("./config/plugin/FaviconsConfig");

module.exports = merge.smart(common, {
    mode: "production",
    plugins: [
        new WorkboxWebpackPlugin.GenerateSW(workboxConfig),
        new WebpackPwaManifestPlugin(manifestConfig),
        new FaviconWebpackPlugin(faviconConfig)
    ]
});