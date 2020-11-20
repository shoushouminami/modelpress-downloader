const ga = require("./google-analytics");
const utils = require("./utils");
const {getDocument, getWindow, getSearchParamValue} = require("./globals");
let url = "popup.html?scan=true";
let always = "";

ga.bootstrap();
require("./i18n").autoBind("scanConfirm");

getDocument().getElementById("yes").addEventListener("click", function () {
    if (always.length > 0) {
        ga.trackEvent("scan_confirm", "always", getSearchParamValue("module"));
    } else {
        ga.trackEvent("scan_confirm", "yes", getSearchParamValue("module"));
    }

    getWindow().location = url + always;
});

getDocument().getElementById("cancel").addEventListener("click", function () {
    ga.trackEvent("scan_confirm", "cancel", getSearchParamValue("module"));
    getWindow().close();
});

getDocument().getElementById("always-yes").addEventListener("change", function (event) {
    always = event.target.checked ? "&always=true" : "";
});

ga.trackEvent("scan_confirm", "show", getSearchParamValue("module"));
