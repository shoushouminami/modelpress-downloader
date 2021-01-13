const {merge} = require('webpack-merge');
const prodFunc = require('./webpack.config');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = env => {
    return merge(prodFunc(env), {
        devtool: false,
        mode: "production",
        optimization: {
            minimize: true,
            minimizer: [new TerserPlugin({
                terserOptions: {
                    module: true,
                    compress: {
                        expression : true
                    },
                    format: {
                        comments: false,
                    },

                },
                extractComments: false,
            })],
        }
    });
};
