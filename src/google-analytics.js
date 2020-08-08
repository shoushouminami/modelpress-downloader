let _gaq = window._gaq = window._gaq || [];
_gaq.push(["_setAccount", "UA-156562835-1"]);
_gaq.push(['_gat._forceSSL']);

const getGaq = function () {
    return window._gaq;
}

const setVar = function (slot, name, value) {
    getGaq().push(["_setCustomVar", slot, name, value]);
}

let e = {
    trackPageview: function (){
        getGaq().push(["_trackPageview"]);
    },
    trackButtonClick: function (buttonId) {
        e.trackEvent(buttonId, "clicked");
    },
    trackEvent: function (category, action, label, value) {
        getGaq().push(["_trackEvent", category, action, label, value]);
    },
    trackDownload: function (site, count) {
        setVar(1, "site", site);
        setVar(2, "version", chrome.runtime.getManifest().version);
        e.trackEvent("download", "clicked", site, count);
    },
    trackSupport: function (site, supported) {
        setVar(1, "site", site);
        setVar(2, "version", chrome.runtime.getManifest().version);
        e.trackEvent("website", supported ? "supported" : "not_supported", site);
    }
};

module.exports = e;

// bootstrap ga script
(function () {
    let ga = document.createElement("script");
    ga.type = "text/javascript";
    ga.async = true;
    ga.src = "https://ssl.google-analytics.com/ga.js";
    let s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(ga, s);
})();
