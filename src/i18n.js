const globals = require("./globals");
const isExt = globals.isChromeExtension();

function getText(id, substitution) {
    return getMessage(id, substitution);
}

function getMessage(messageName, substitutions) {
    if (isExt) {
        return chrome.i18n.getMessage(messageName, substitutions);
    } else {
        // not in chrome extension website.
        // no substitution support
        let lang = globals.getWindow().navigator.language.toLowerCase();
        if (lang === "en" || lang.startsWith("en-")) {
            lang = "en";
        } else if (lang === "ja" || lang.startsWith("ja-")) {
            lang = "ja";
        } else if(lang === "zh" || lang === "zh-cn" || lang === "zh_cn") {
            lang = "zh_CN";
        } else if (lang === "zh-tw" || lang === "zh_tw") {
            lang = "zh_TW";
        } else {
            lang = "en";
        }

        let message = require("./_locales/" + lang + "/messages.json");
        // logger.debug("messages=", message);
        if (message) {
            return message[messageName]["message"];
        }
    }
}

exports.getText = getText;

