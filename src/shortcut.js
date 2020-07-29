
if (window.location.host.endsWith("mdpr.jp")) {
    let o = require("./inject/return-message.js").init();
    const sites = require("./inject/sites.js");
    const site = sites.get(window.location);
    if (site) {
        o = site.inject();
    } else {
        o.supported = false;
    }

    if (!o.supported) {

    } else {
        completion(o.images);
    }
}
alert("Not supported!");
completion([]);
