window.chrome = {
    runtime: {
        onMessage: {
            addListener: () => {
            }
        },
        getURL: function (filepath) { // needed for retrying inject script
            // bridges from "test/inject" to "build/"
            return "../../build/" + filepath;
        }
    }
};
