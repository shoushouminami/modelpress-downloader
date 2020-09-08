const {merge} = require('webpack-merge');
const prodFunc = require('../webpack.config');
const webpack = require('webpack');

module.exports = env => {
    return merge(prodFunc(env), {
        entry: {
            // path relative to root
            "test-inject": "./test/mock/test-inject.js"
        },
        plugins: [
            new webpack.NamedModulesPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            new (require("rewiremock/webpack/plugin"))()
        ],
    })
};
