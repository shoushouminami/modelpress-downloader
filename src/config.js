"use strict";
document.getElementById("stopButton").addEventListener("click", function () {
    chrome.runtime.sendMessage({what: "stop"}, function (response) {
        console.debug("Stopped successfully.");
    });
});