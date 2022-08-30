const utils = require("../utils.js");

module.exports = {
    inject: function () {
       return require("./return-message.js").notSupported()
    },
    host: "spur.hpplus.jp",
};
