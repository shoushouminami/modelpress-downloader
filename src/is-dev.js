const runtime = require("./runtime");
let isDev;

if (typeof __IS_DEV__ === 'undefined') {
    console.warn("isDev: In NodeJS build.");
    isDev = global.isDev || false; // nodejs
    console.log("nodejs: isDev: ", isDev);
} else {
    isDev = __IS_DEV__ ;
    if (runtime.isServiceWorker()) {
        isDev =  isDev || require("./globals").getWindow()["isDev"];
    } else {
        isDev =  isDev || ("true" === require("./storage").sessionGet("isDev")); //webpack
    }

    if (isDev) {
        console.log("webpack: isDev: ", isDev);
    }
}

module.exports = isDev;
