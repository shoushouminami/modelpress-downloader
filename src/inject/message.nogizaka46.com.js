const utils = require("../utils.js");
const helper = require("../helper/helper-utils");
const messaging = require("../messaging.js");
const urlUtils = require("../../src/utils/url-utils");
const {getWindow} = require("../globals.js");
const { altHosts } = require("./www.oricon.co.jp.js");
const logger = require("../../src/logger2")(module.id);
const { loadPerisistedSiteOptions, onOptionsChanged, isOptionValueChanged } = require("../site-options");

let lastGroupResp = null; // { group_d: 64, group_messages: [{}, ..], group: {id: 64, ...}, group_members: [{} ...]}

function toJSTDatetimeStr(utcDateString) {
    const date = new Date(utcDateString);

    const parts = new Intl.DateTimeFormat("ja-JP", {
        timeZone: "Asia/Tokyo",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        weekday: "short",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
    }).formatToParts(date);

    const map = Object.fromEntries(
        parts.map(p => [p.type, p.value])
    );

    return `${map.year}年${map.month}月${map.day}日（${map.weekday}）` +
        `${map.hour}時${map.minute}分${map.second}秒`;

}
function getGroupMessagesFromHelper(groupId, options, onResponse) {
    logger.debug("getting messages of group", groupId);
    messaging.sendToPage("getImageUrl", {
        group_id: groupId,
        seconds_ago: options.daysAgo.value * 3600 * 24
    }, function (resp) {
        logger.debug("Received messages of groupId=", groupId, "resp=", resp);
        onResponse(resp);
        lastGroupResp = resp;
    });
}

function pushMediaIntoReturnMessageWithOptions(group, group_messages, group_members, o) {
    // filter out media type if o.options selects types
    group_messages?.filter(m => m.type === "picture" || m.type === "video" || m.type === "voice" || m.type === "text")
        .forEach(m => {
            const member = group_members.find(member => member.id === m.member_id);
            const filenamePrefix = (group_members?.length > 1 ? ((member?.name ?? group?.name ?? "") + "-") : "") + toJSTDatetimeStr(m.published_at)
            switch (m.type) {
                case "voice":
                    if (o.options.downloadVoice.checked && m.file) {
                        o.images.push({
                            url: m.file,
                            thumbnail: "../images/fixedAudioIcon.svg",
                            filename: filenamePrefix + ".m4a"
                        });
                    }
                    break;
                case "picture":
                    if (m.file) {
                        o.images.push({
                            url: m.file,
                            thumbnail: m.thumbnail,
                            filename: filenamePrefix + ".jpg"
                        });
                    }
                    break;
                case "video":
                    if (o.options.downloadVideo.checked && m.file) {
                        o.images.push({
                            url: m.file,
                            thumbnail: m.thumbnail,
                            filename: filenamePrefix + ".mp4"
                        });
                    }
                    break;
                case "text":
                    break;
                default:
                    logger.debug("Unknown media type", m.type);
            }

            if (m.text && o.options.downloadText.checked) {
                const imgTag = m.type === "picture" ? `<img src="./${filenamePrefix + ".jpg"}"/><br>` : "";
                const webpage = `<html lang="ja"><head><meta charset="UTF-8"></head><body>${imgTag}<pre>${m.text}</pre></body></html>`;
                o.images.push({
                    url: "data:text/html;charset=utf-8," + encodeURIComponent(webpage),
                    thumbnail: "../images/fixedTalkOutlineIcon.svg",
                    filename: filenamePrefix + ".html"
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

    function sendResultToPopup({ group_messages, group, group_members }) {
        o.images = [];
        pushMediaIntoReturnMessageWithOptions(group, group_messages, group_members, o);
        o.loading = false;
        o.folder = group.name;
        messaging.sendToRuntime("updateResult", o);
    };

    // setup event listener to update options 
    onOptionsChanged(({options}) => {
        const prevOptions = o.options;
        o.options = options;

        // refetch data when "daysAgo" changed
        if (prevOptions.daysAgo?.value !== options.daysAgo?.value || lastGroupResp == null) {
            // temporarily set loading icon on
            o.loading = true;
            o.images = [];
            messaging.sendToRuntime("updateResult", o);
            // get media and updateResult
            getGroupMessagesFromHelper(getGroupId(), o.options, sendResultToPopup);
            
        } else if ( // if any media type option is changed, we reuse lastGroupResp and filter again
            ["downloadVideo", "downloadVoice", "downloadText"].some((optName) => isOptionValueChanged(prevOptions, options, optName))
        ) { // if download media type changed, re-filter 
            sendResultToPopup(lastGroupResp);
        }
    });

    const groupId = getGroupId();
    if (groupId != null) {
        if (helper.getDataDiv()) { // helper script injected
            loadPerisistedSiteOptions(o.host, o.options)
                .then(({ options }) => {
                    o.options = options;
                    // get media from helper
                    getGroupMessagesFromHelper(groupId, o.options, sendResultToPopup);
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
