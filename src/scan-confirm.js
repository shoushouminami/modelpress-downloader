
require("./i18n").autoBind("scanConfirm");

let url = "popup.html?scan=true";
let always = "";

document.getElementById("yes").addEventListener("click", function () {
    window.location = url + always;
});

document.getElementById("cancel").addEventListener("click", function () {
    window.close();
});

document.getElementById("always-yes").addEventListener("change", function (event) {
    always = event.target.checked ? "&always=true" : "";
});
