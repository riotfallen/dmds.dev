const merge = require("webpack-merge");

const common = require("./config/webpack/webpack.common");

module.exports = merge.smart(common, {
    mode: "development"
});