const utils = require("../utils.js");
const helper = require("../helper/helper-utils");
const messaging = require("../messaging.js");
const urlUtils = require("../../src/utils/url-utils");
const {getWindow} = require("../globals.js");
const { altHosts } = require("./www.oricon.co.jp.js");
const logger = require("../../src/logger2")(module.id);
const { loadSiteOptions, onOptionsChanged } = require("../site-options");

function getMediaFromPage(groupId, options, onResponse) {
    logger.debug("getting messages of group", groupId);
    messaging.sendToPage("getImageUrl", {
        groupId: groupId,
        secondsAgo: options.daysAgo.value * 3600 * 24
    }, function (resp) {
        logger.debug("Received messages of group", groupId, resp);
        onResponse(resp.groupMsg);
    });
}

function pushMediaIntoReturnMessageWithOptions(groupMsg, o) {
    // TODO
    // filter out media type if o.options selects types
    groupMsg && groupMsg.length && groupMsg
        .filter(m => m.type === "picture" || m.type === "video" || m.type === "voice" || m.type === "text")
        .forEach(m => {
            switch (m.type) {
                case "voice":
                    if (o.options.downloadVoice.checked && m.file) {
                        o.images.push(m.file);
                    }
                    break;
                case "picture":
                    if (m.file) {
                        o.images.push(m.file);
                    }
                    break;
                case "video":
                    if (o.options.downloadVideo.checked && m.file) {
                        o.images.push(m.file);
                    }
                    break;
                case "text":
                    break;
                default:
                    logger.debug("Unknown media type", m.type);
            }

            if (m.text && o.options.downloadText.checked) {
                const imgTag = m.type === "picture" ? `<img src="./${utils.getFileName(m.file)}"/><br>` : "";
                const webpage = `<html lang="ja"><head><meta charset="UTF-8"></head><body>${imgTag}<pre>${m.text}</pre></body></html>`;
                o.images.push({
                    url: "data:text/html;charset=utf-8," + encodeURIComponent(webpage),
                    filename: m.id + ".html"
                });
            }
        });
}

function getGroupId() {
    const pathname = urlUtils.pathname(getWindow().location.href);
    const parts = pathname.split("/");
    if (parts[parts.length - 2] === "timeline") {
       return parts[parts.length - 1];
    }

    return null;
}

function inject() {
    const returnMessage = require("./return-message.js");
    let o = returnMessage.init();
    o.ignoreJobId = true;
    // default options
    o.options = {
        "daysAgo": {
            index: 1,
            label: "Days Ago",
            type: "range",
            min: 1,
            max: 7,
            value: 1
        },
        "downloadVideo": {
            index: 2,
            label: "Download Video",
            type: "checkbox",
            checked: true
        },
        "downloadVoice": {
            index: 3,
            label: "Download Voice",
            type: "checkbox",
            checked: true
        },
        "downloadText": {
            index: 4,
            label: "Download Text as HTML",
            type: "checkbox",
            checked: true
        }
    };

    // setup event listener to update options 
    onOptionsChanged(({options}) => {
        o.options = options;
        // temporarily set loading icon on
        o.loading = true;
        o.images = [];
        messaging.sendToRuntime("updateResult", o);
        // get media 
        getMediaFromPage(getGroupId(), o.options, function (groupMsg) {
            pushMediaIntoReturnMessageWithOptions(groupMsg, o);
            o.loading = false;
            messaging.sendToRuntime("updateResult", o);
        });
    });

    const groupId = getGroupId();
    if (groupId != null) {
        if (helper.getDataDiv()) {
            // helper script injected
            loadSiteOptions(o.host, o.options)
                .then(({ options }) => {
                    o.options = options;
                    // get media from helper
                    getMediaFromPage(groupId, o.options, function (groupMsg) {
                        pushMediaIntoReturnMessageWithOptions(groupMsg, o);
                        o.loading = false;
                        messaging.sendToRuntime("updateResult", o);
                    });
                });
            
        } else {
            // inject helper script and wait
            require("../utils/func-utils")
                .injectScriptFileToDOM(chrome.runtime.getURL("helper/message.nogizaka46.com-helper.js"));
            o.retry = true;
            o.retryAfterMs = 300; // retry after 1s
        }

        o.loading = true;
        return o;
    } else {
        // path not supported
        return o;
    }

}

module.exports = {
    inject: inject,
    host: "message.nogizaka46.com",
    altHosts: ["message.hinatazaka46.com", "message.sakurazaka46.com"],
    hidden: true
};
