const path = require("path");
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = env => {
    let conf = env && env.NODE_ENV === "test" ? require("./config/dev") : require("./config/prod");
    return {
        entry: {
            inject: "./src/inject.js",
            background: "./src/background.js",
            popup: "./src/popup.js",
            "helper/instagram-react": "./src/helper/instagram-react.js",
            "helper/rbbtoday-check-size": "./src/helper/rbbtoday-check-size.js"
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'build'),
        },
        plugins: [
            new CopyPlugin([
                {
                    from: 'src/**/*',
                    to: "./",
                    ignore: ["*.js"],
                    transformPath: function (targetPath, absolutePath) {
                        return targetPath.replace("src/", "");
                    }
                },
            ]),
            new webpack.DefinePlugin({
                "__GA_PROPERTY__": JSON.stringify(conf.ga_property),
                "__IS_DEV__": JSON.stringify(conf.is_dev)
            })
        ],
        devtool: false,
        mode: "development",
    }
};
