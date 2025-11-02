const utils = require("../utils.js");
const helper = require("../helper/helper-utils");
const messaging = require("../messaging.js");
const urlUtils = require("../../src/utils/url-utils");
const {getWindow} = require("../globals.js");
const logger = require("../../src/logger2")(module.id);

module.exports = {
    inject: function () {
        const returnMessage = require("./return-message.js");
        
        let o = returnMessage.init();
        o.ignoreJobId = true;
        
        const pathname = urlUtils.pathname(getWindow().location.href);
        const parts = pathname.split("/");
        if (parts[parts.length - 2] === "timeline") {
            const groupId = parts[parts.length - 1];
            if (helper.getDataDiv()) {
                // helper script injected
                // message page to get media
                logger.debug("getting messages of group", groupId);
                messaging.sendToPage("getImageUrl", {
                    groupId: groupId,
                    secondsAgo: 3600 * 24
                }, function (resp) {
                    logger.debug("Received messages of group", groupId, resp);
                    resp.groupMsg && resp.groupMsg.length && resp.groupMsg
                        .filter(m => m.type === "picture" || m.type === "video" || m.type === "voice" || m.type === "text")
                        .forEach(m => {
                            switch (m.type) {
                                case "voice":
                                case "picture":
                                case "video":
                                    o.images.push(m.file)
                                    break;
                                case "text":
                                    // noop
                                    break;
                                default:
                                    logger.debug("Unknown media type", m.type);
                            }

                            if (m.text) {
                                const imgTag = m.type === "picture" ? `<img src="./${utils.getFileName(m.file)}"/><br>` : "";
                                const webpage = `<html lang="ja"><head><meta charset="UTF-8"></head><body>${imgTag}<pre>${m.text}</pre></body></html>`;
                                o.images.push({
                                    url: "data:text/html;charset=utf-8," + encodeURIComponent(webpage),
                                    filename: m.id + ".html"
                                })
                            }
                        });

                    o.loading = false;
                    messaging.sendToRuntime("updateResult", o);
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
        
    },
    host: "message.nogizaka46.com",
    hidden: true
};
