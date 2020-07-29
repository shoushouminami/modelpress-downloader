const path = require("path");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        inject: "./src/inject.js",
        background: "./src/background.js",
        popup: "./src/popup.js",
        "helper/instagram-react": "./src/helper/instagram-react.js",
        shortcut: "./src/shortcut.js"
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
        ])
    ],
    devtool: false,
};
