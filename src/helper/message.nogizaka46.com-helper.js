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

    const logger = require("../../src/logger2")(module.id);
    const helper = require("./helper-utils");
    const CACHE = {}; // "members" -> {group_id -> resp from https://api.message.nogizaka46.com/v2/groups/64/members"
                        // "groups" -> all groups info from /v2/groups?organization_id=1

    const hostname = new URL(window.location.href).hostname;
    const API_DOMAIN = API_DOMAIN_MAP[hostname];
    const API_APP_ID = API_APP_ID_MAP[hostname];
    
    // prevents the helper to run again
    if (helper.getDataDiv() != null) {
        logger.error("Stop running helper for the 2nd time.");
        return; 
    }
    helper.getOrCreateDataDiv();

    function getEncodedTimestampUTC(seconds_ago) {
        return encodeURIComponent(
            new Date(Date.now() - seconds_ago * 1000).toISOString().split(".")[0] + "Z"
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

    async function getGroupMembers(token, group_id) {
        const resp = await fetch(
            `https://${API_DOMAIN}/v2/groups/${group_id}/members`,
            {
                credentials: "include",
                headers: createAppHeaders(token)
            }
        );

        await checkResp(resp);
        const respBody = await resp.json();

        logger.debug("Received response from getGroupMembers resp=", respBody);
        return respBody;
    }

    async function getAllGroupsUnderOrg(token, org_id = 1) {
        logger.debug("Getting groups of org=", org_id);
        const resp = await fetch(
            `https://${API_DOMAIN}/v2/groups?organization_id=${org_id}`,
            {
                credentials: "include",
                headers: createAppHeaders(token)
            }
        );

        await checkResp(resp);
        const respBody = await resp.json();
        logger.debug("Received response from getGroupMembers resp=", respBody);
        return respBody;
    }

    async function getTimelineMessages(token, group_id, seconds_ago) {
        logger.debug("Getting timeline of", group_id, " in the past", seconds_ago, "seconds");
        const timelineResp = await fetch(
            `https://${API_DOMAIN}/v2/groups/${group_id}/timeline?updated_from=${getEncodedTimestampUTC(seconds_ago)}&count=200&order=asc&clear_unread=false`,
            {
                credentials: "include",
                headers: createAppHeaders(token)
            }
        );

        await checkResp(timelineResp);
        const timelineRespBody = await timelineResp.json();
        return timelineRespBody;
    }

    function createAppHeaders(token) {
        return {
            "Authorization": "Bearer " + token,
            "x-talk-app-id": API_APP_ID,
            "x-talk-app-platform": "web",
            "Accept": "application/json"
        };
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
        messaging.listenOnPage("getImageUrl", function ({group_id, seconds_ago}, sendResponse) {
            logger.debug("Received getImageUrl requset msg=", { group_id, seconds_ago });
            // msg : {group_id: 123, seconds_ago?: 3600}
            if (group_id) {
                refreshTokenIfNecessary()
                    .then(() => {
                        if (CACHE["groups"] == null) {
                            return getAllGroupsUnderOrg(TOKEN)
                        }
                    })
                    .then((groupsJson) => {
                        if (groupsJson) {
                            CACHE["groups"] = groupsJson;
                        }
                    })
                    .then(() => {
                        if (CACHE["members"]?.[group_id] == null) {
                            return getGroupMembers(TOKEN, group_id)
                        }
                    })
                    .then((membersJson) => {
                        if (membersJson) {
                            CACHE["members"] ??= {};
                            CACHE["members"][group_id] = membersJson
                        }
                    })
                    .then(
                        () => getTimelineMessages(TOKEN, group_id, seconds_ago ? seconds_ago : 3600 * 24)
                    )
                    .then((timelineRespBody) => {
                        logger.debug("Received response from timeline resp=", timelineRespBody);
                        sendResponse({
                            group_id: group_id,
                            group_messages: timelineRespBody.messages,
                            group: Object.values(CACHE["groups"] ?? {}).find(g => g.id == group_id),
                            group_members: CACHE["members"]?.[group_id]
                        });
                    })
                    .catch(function (error) {
                        logger.error("Error during handling getImageUrl", error);
                    });
                ;
            } else {
                logger.error("Bad message msg=", { group_id, seconds_ago });
            }
        });

    } catch (error) {
        logger.error(error);
    };
})();



