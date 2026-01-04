const globals = require("./globals");
const isExt = globals.isChromeExtension();
const logger = require("./logger2")(module.id);

function getText(id, substitution) {
    return getMessage(id, substitution);
}

function getMessage(messageName, substitutions) {
    if (isExt) {
        return chrome.i18n.getMessage(messageName, substitutions);
    } else {
        // not in chrome extension website.
        // no substitution support
        const lang = getLangFromBrowser();
        const message = require("./_locales/" + lang + "/messages.json");
        // logger.debug("messages=", message);
        if (message) {
            return message[messageName]["message"];
        }
    }
}

function detectLanguage() {
    if (typeof chrome !== "undefined" && chrome.i18n?.getUILanguage) {
        return chrome.i18n.getUILanguage().toLowerCase();
    }

    return navigator.language?.toLowerCase() ?? "en";
}

function getLangFromBrowser() {
    const langRaw = detectLanguage();

    if (!langRaw || langRaw === "en" || langRaw.startsWith("en-")) {
        return "en";
    } 
    
    if (langRaw.startsWith("ja")) {
        return "ja";
    } 

    // Traditional Chinese
    if (
        langRaw.startsWith("zh-tw") ||
        langRaw.startsWith("zh-hk") ||
        langRaw.startsWith("zh-hant")
    ) {
        return "zh_TW";
    }
    
    // Simplified Chinese
    if (
        langRaw.startsWith("zh-cn") ||
        langRaw.startsWith("zh-hans") ||
        langRaw === "zh"
    ) {
        return "zh_CN";
    }
  
    return "en";
}

function getMessageDescription(messageName) {
    const lang = getLangFromBrowser();
    try {
        const message = require("./_locales/" + lang + "/messages.json");
        logger.debug("Loaded i18n lang=", lang, "messages=", message);
        return message?.[messageName]?.description;
    } catch (e) {
        logger.error("Failed to load i18n file as module lang=", lang, "error=", e);
        return undefined;
    }
}

module.exports = {
    getText,
    getMessageDescription
};

