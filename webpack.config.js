const path = require("path");
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = env => {
    let conf = env && env.NODE_ENV === "dev" ? require("./config/dev") : require("./config/prod");
    return {
        entry: {
            inject: "./src/inject.js",
            "inject-cs": "./src/inject-cs.js",
            "scan-cs": "./src/scan-cs.js",
            background: "./src/background.js",
            popup: "./src/popup.js",
            "scan-confirm": "./src/scan-confirm.js",
            "helper/instagram-react": "./src/helper/instagram-react.js",
            "helper/rbbtoday-check-size": "./src/helper/rbbtoday-check-size.js",
            "helper/twitter-react": "./src/helper/twitter-react.js",
            "google-analytics-bootstrap": "./src/google-analytics-bootstrap.js",
            "github-pages/sites-html": "./src/github-pages/sites-html.js",
        },
        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ['@babel/preset-react']
                        }
                    }
                }
            ]
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
                    ignore: ["*.js", "src/docs/*"],
                    transformPath: function (targetPath, absolutePath) {
                        return targetPath.replace("src/", "");
                    }
                }
            ]),
            new webpack.DefinePlugin({
                "__GA_PROPERTY__": JSON.stringify(conf.ga_property),
                "__IS_DEV__": JSON.stringify(conf.is_dev)
            })
        ],
        devtool: "inline-source-map",
        mode: "development",
    }
};
