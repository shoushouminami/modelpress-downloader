let isDev;

if (typeof __IS_DEV__ === 'undefined') {
    console.warn("isDev: In NodeJS build.");
    isDev = global.isDev || false; // nodejs
    console.log("nodejs: isDev: ", isDev);
} else {
    isDev = __IS_DEV__; //webpack
    console.log("webpack: isDev: ", isDev);
}
module.exports = isDev;
