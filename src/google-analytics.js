let _gaq = window._gaq = window._gaq || [];
_gaq.push(["_setAccount", "UA-156562835-1"]);
_gaq.push(['_gat._forceSSL']);
_gaq.push(["_trackPageview"]);

const getGaq = function () {
    return window._gaq;
}

const trackDownloadButtonClick = function (imageCount){
    trackEvent("download", "clicked", "count", imageCount);
};

const trackButtonClick = function (buttonId){
    trackEvent(buttonId, "clicked");
};

const trackEvent = function (object, event, param, value){
    getGaq().push(["_trackEvent", object, event, param, value]);
};

// bootstrap ga script
(function() {
    let ga = document.createElement("script");
    ga.type = "text/javascript";
    ga.async = true;
    ga.src = "https://ssl.google-analytics.com/ga.js";
    let s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(ga, s);
})();

module.exports = {
    trackButtonClick: trackButtonClick,
    trackEvent: trackEvent,
    trackDownloadButtonClick: trackDownloadButtonClick
}
