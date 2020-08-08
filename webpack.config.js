const path = require("path");
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = env => {
    let conf = env && env.NODE_ENV === "test" ? require("./config/test") : require("./config/prod");
    return {
        entry: {
            inject: "./src/inject.js",
            background: "./src/background.js",
            popup: "./src/popup.js",
            "helper/instagram-react": "./src/helper/instagram-react.js",
            shortcut: "./src/shortcut.js",
            "google-analytics": "./src/google-analytics.js",
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
                "__GA_PROPERTY__": JSON.stringify(conf.ga_property)
            })
        ],
        devtool: false,
    }
};
