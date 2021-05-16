const globals = require("./globals");
const isExt = globals.isChromeExtension();
// const logger = require("./logger");

function getScopedName(id, scope) {
    if (id != null) {
        if (scope != null) {
            return scope + "_" + id;
        }

        return id;
    }

    return null;
}

export const AUTO_BIND_CLASS = "i18n-auto-bind";

export function getText(id, scope, substitution) {
    return (getMessage(getScopedName(id, scope), substitution) ||
        getMessage(getScopedName(id, null), substitution));
}

export function bindDomTextById(dom, scope) {
    dom.innerText = getText(dom.id, scope);
}

export function autoBind(scope){
    document.querySelectorAll("." + this.AUTO_BIND_CLASS).forEach(
        dom => {
            if (dom.id != null) {
                this.bindDomTextById(dom, scope);
            }
        }
    )
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


