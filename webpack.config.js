const path = require("path");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        inject: "./src/inject.js",
        background: "./src/background.js",
        popup: "./src/popup.js",
        "helper/instagram-react": "./src/helper/instagram-react.js"
    },
    output: {
        // library: 'o',
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
            // { from: 'images', to: 'build/' },
        ])
    ],
    devtool: false
};