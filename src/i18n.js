const globals = require("./globals");
const isExt = globals.isChromeExtension();

function getScopedName(id, scope) {
    if (id != null) {
        if (scope != null) {
            return scope + "_" + id;
        }

        return id;
    }

    return null;
}

function getText(id, scope, substitution) {
    return (getMessage(getScopedName(id, scope), substitution) ||
        getMessage(getScopedName(id, null), substitution));
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

