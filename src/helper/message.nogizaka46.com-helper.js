(async function(){
    "use strict";

    const API_DOMAIN_MAP = {
        "message.nogizaka46.com": "api.message.nogizaka46.com",
        "message.hinatazaka46.com": "api.message.hinatazaka46.com",
        "message.sakurazaka46.com": "api.message.sakurazaka46.com",
    }

    const API_APP_ID_MAP = {
        "message.nogizaka46.com": "jp.co.sonymusic.communication.nogizaka 2.5",
        "message.hinatazaka46.com": "jp.co.sonymusic.communication.keyakizaka 2.5",
        "message.sakurazaka46.com": "jp.co.sonymusic.communication.sakurazaka 2.5",
    }

    const urlUtils = require("../../src/utils/url-utils");
    const logger = require("../../src/logger2")(module.id);
    const helper = require("./helper-utils");
    const CACHE = {}; // {group_id -> {msg_id: message} }

    const hostname = new URL(window.location.href).hostname;
    const API_DOMAIN = API_DOMAIN_MAP[hostname];
    const API_APP_ID = API_APP_ID_MAP[hostname];
    
    // prevents the helper to run again
    if (helper.getDataDiv() != null) {
        logger.error("Stop running helper for the 2nd time.");
        return; 
    }
    helper.getOrCreateDataDiv();

    function getEncodedTimestampUTC(secondsAgo) {
        return encodeURIComponent(
            new Date(Date.now() - secondsAgo * 1000).toISOString().split(".")[0] + "Z"
        );
    }

    async function checkResp(resp) {
        if (!resp.ok) {
            // try to read server message safely
            let detail = '';
            try { detail = await res.text(); } catch {}
            throw new Error(`HTTP ${res.status} ${res.statusText} - ${detail}`);
        }
    }

    async function getToken() {
        const resp = await fetch(
            `https://${API_DOMAIN}/v2/update_token`,
            {
                method: "POST",
                body: JSON.stringify({ refresh_token: null }),
                credentials: "include",
                headers: {
                    "x-talk-app-id": API_APP_ID,
                    "x-talk-app-platform": "web"
                }
            }
        );

        await checkResp(resp);
        const respBody = await resp.json();

        logger.debug("Received response from update_token resp=", respBody);
        return respBody;
    }

    async function getTimelineMessages(token, groupId, secondsAgo) {
        logger.debug("Getting timeline of", groupId, " in the past", secondsAgo, "seconds");
        const timelineResp = await fetch(
            `https://${API_DOMAIN}/v2/groups/${groupId}/timeline?updated_from=${getEncodedTimestampUTC(secondsAgo)}&count=200&order=asc&clear_unread=false`,
            {
                credentials: "include",
                headers: {
                    "Authorization": "Bearer " + token,
                    "x-talk-app-id": API_APP_ID,
                    "x-talk-app-platform": "web",
                    "Accept": "application/json"
                }
            }
        );

        await checkResp(timelineResp);
        const timelineRespBody = await timelineResp.json();
        return timelineRespBody;
    }


    function addToCache(timelineRespBody, CACHE) {
        timelineRespBody.messages
            .forEach(m => {
                const k = m.id + "";
                if (CACHE[m.group_id] == null) {
                    CACHE[m.group_id] = {};
                }
                CACHE[m.group_id][k] = m;
            });
    }

    try {
        // Fetch OAUTH token https://${API_DOMAIN}/v2/update_token
        let TOKEN;
        let TOKEN_EXP_TS_MS = 0;

        async function refreshToken(){
            const getTokenResponse = await getToken();
            TOKEN = getTokenResponse.access_token;
            TOKEN_EXP_TS_MS = (getTokenResponse.expires_in + Date.now() / 1000) * 1000;

            if (TOKEN == null) {
                throw new Error("Failed to fetch bearer TOKEN");
            }

            return TOKEN;
        }

        // refresh token if there is <10 min before the token expires
        async function refreshTokenIfNecessary() {
            if ((Date.now() + 600 * 1000) > TOKEN_EXP_TS_MS) {
                return await refreshToken();
            }
            return TOKEN;
        }

        const messaging = require("../../src/messaging");
        messaging.listenOnPage("getImageUrl", function (msg, sendResponse) {
            logger.debug("Got getImageUrl msg", msg);
            // msg : {groupId: 123, secondsAgo?: 3600, onlyNew?: boolean}
            if (msg.groupId) {
                refreshTokenIfNecessary()
                .then(function(){
                    return getTimelineMessages(TOKEN, msg.groupId, msg.secondsAgo ? msg.secondsAgo : 3600 * 24)
                        .then(function (timelineRespBody) {
                            logger.debug("Received response from timeline resp=", timelineRespBody);
                            // get the messages that is not yet in CACHE
                            const newMessages = timelineRespBody.messages.filter(m => CACHE[m.group_id] == null || !(m.id in CACHE[m.group_id]));
                            // add all new messages to CACHE
                            addToCache(timelineRespBody, CACHE);

                            const groupMsg = msg.onlyNew ? newMessages : Object.keys(CACHE[msg.groupId]).sort().map(k => CACHE[msg.groupId][k]);
                            sendResponse({
                                groupId: msg.groupId,
                                groupMsg: groupMsg
                            });
                        });
                })
                .catch(function(error){
                    logger.error("Error during handling getImageUrl", error);
                });
                ;
            } else {
                logger.error("Bad message msg=", msg);
            }
        });

    } catch (error) {
        logger.error(error);
    };


    
})();



