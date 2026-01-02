const path = require("path");
const CopyPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');

module.exports = env => {
    let conf = env && env.NODE_ENV === "dev" ? require("./config/dev") : require("./config/prod");
    return {
        entry: {
            inject: "./src/inject.js",
            "inject-cs": "./src/inject-cs.js",
            background: "./src/background.js",
            popup: "./src/popup.js",
            "helper/instagram-react": "./src/helper/instagram-react.js",
            "helper/rbbtoday-check-size": "./src/helper/rbbtoday-check-size.js",
            "helper/my.ebook5.net-helper": "./src/helper/my.ebook5.net-helper.js",
            "helper/glassgirl-info-helper": "./src/helper/glassgirl-info-helper.js",
            "helper/www.grajapa.shueisha.co.jp-helper": "./src/helper/www.grajapa.shueisha.co.jp-helper.js",
            "helper/message.nogizaka46.com-helper": "./src/helper/message.nogizaka46.com-helper.js",
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
                            presets: ["@babel/preset-react"],
                            plugins: [
                                "@babel/plugin-transform-class-properties", 
                                "@babel/plugin-proposal-optional-chaining", 
                                "@babel/plugin-proposal-nullish-coalescing-operator",
                                "@babel/plugin-proposal-logical-assignment-operators"
                            ]
                        }
                    }
                },
                {
                    test: /\.css$/i,
                    use: [
                        "style-loader", // injects CSS into <style> tags
                        "css-loader"    // lets JS import/require CSS files
                    ]
                }
            ]
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'build'),
            globalObject: 'this'
        },
        plugins: [
            new CopyPlugin([
                {
                    from: "src/**/*",
                    to: "./",
                    ignore: ["*.js", "src/docs/*"],
                    transformPath: function (targetPath, absolutePath) {
                        return targetPath.replace("src/", "");
                    }
                }
            ]),
            new CopyPlugin([
                {
                    from: "licenses/**/*",
                    to: "./"
                }
            ]),
            new CopyPlugin([
                {
                    from: "NOTICE",
                    to: "./"
                }
            ]),
            new webpack.DefinePlugin({
                "__GA_PROPERTY__": JSON.stringify(conf.ga_property),
                "__GA4_MEASUREMENT_ID__": JSON.stringify(conf.ga4_measurement_id),
                "__GA4_MEASUREMENT_SECRET__": JSON.stringify(conf.ga4_measurement_secret),
                "__IS_DEV__": JSON.stringify(conf.is_dev)
            })
        ],
        devtool: "inline-source-map",
        mode: "development",
    }
};
