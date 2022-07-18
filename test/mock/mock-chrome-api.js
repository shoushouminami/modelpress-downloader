// mock a few functions so inject scripts running in tests can function
window.chrome = {
    runtime: {
        onMessage: {
            addListener: () => {
            }
        },
        getURL: function (filepath) { // needed for retrying inject script
            // bridges from "test/inject" to "build/"
            return "../../build/" + filepath;
        },
        sendMessage: function (payload, onResponse) {
            window._mid = window._mid || {};
            window._mid.sendMessages = window._mid.sendMessages || [];
            window._mid.sendMessages.push(payload);
        }
    }
};
