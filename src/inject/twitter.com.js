const utils = require("../utils.js");
const logger = require("../logger2.js")(module.id);
const messaging = require("../messaging.js");
const WEB_BEARER_TOKEN = "AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA";
const { loadPerisistedSiteOptionsAndOnChange } = require("../site-options");
const cache = require("../globals.js").getGlobalObjectCache(module.id);

function getLargeImg(src) {
    if (src && src.indexOf(".twimg.com/") > -1) {
        if (src.endsWith(".jpg") || src.endsWith(".png")) {
            return src + ":large";
        }

        try {
            const url = new URL(src);
            if (url.searchParams.has("format")) {
                url.searchParams.set("format", "jpg");
            }
            url.searchParams.set("name", "4096x4096");

            return url.toString();
        } catch (e) {
            logger.error(e);
        }
    }

    return src;
};

function getLargeImgFromDom(imgDom) {
    if (!imgDom) {
        return null;
    }

    const url = getLargeImg(imgDom.src);
    const a = imgDom.closest("a");

    const {statusId, photoId, userId} = getStatusIdFromUrl(a?.href);
    const filename = statusId && photoId && userId ? userId + "-" + statusId + "-" + photoId : utils.getFileName(url);
    return {
        url,
        filename
    }
}

const re = /^https:\/\/.*\/([^/]+)\/status\/(\d+)\/?(photo\/(\d+)\/?)?$/;
function getStatusIdFromUrl(url) {
    const m = url?.match(re);
    return {
        userId: m?.[1],
        statusId:  m?.[2],
        photoId: m?.[4]
    };
}

function getVideoFilenameFromStatusUrl(url, ext) {
    const { userId, statusId } = getStatusIdFromUrl(url);
    return userId && statusId ? userId + "-" + statusId + "." + ext : null;
}
/**
 * Extract video links + thumbnails from X/Twitter JSON.
 *
 * Returns:
 *  {
 *    mp4: [{ url, bitrate, source }],
 *    hls: [{ url, source }],
 *    players: [url],
 *    thumbnails: [url],
 *    best: url | null,
 *    bestThumbnail: url | null,
 *    debug: { hits: [] }
 *  }
 */
function extractXVideoAndThumbnail(root) {
    const out = {
        mp4: [],
        hls: [],
        players: [],
        thumbnails: [],
        best: null,
        bestThumbnail: null,
        debug: { hits: [] }
    };

    const isObj = (v) => v && typeof v === "object";
    const uniq = (arr, v) => { if (v && !arr.includes(v)) arr.push(v); };
    const normalizeUrl = (u) =>
        typeof u === "string" ? u.replace(/\\u0026/g, "&") : null;

    function walk(node, visit) {
        if (!isObj(node)) return;
        visit(node);
        if (Array.isArray(node)) node.forEach((n) => walk(n, visit));
        else Object.values(node).forEach((n) => walk(n, visit));
    }

    // ---------- 1) API v2 includes.media ----------
    if (isObj(root?.includes) && Array.isArray(root.includes.media)) {
        for (const m of root.includes.media) {
            if (m.preview_image_url) {
                uniq(out.thumbnails, normalizeUrl(m.preview_image_url));
                out.debug.hits.push("api_v2.preview_image_url");
            }
            if (Array.isArray(m.variants)) {
                for (const v of m.variants) {
                    const url = normalizeUrl(v.url);
                    if (!url) continue;
                    if (v.content_type === "video/mp4" || url.includes(".mp4")) {
                        out.mp4.push({ url, bitrate: v.bit_rate ?? null, source: "api_v2" });
                    } else if (v.content_type === "application/x-mpegURL" || url.includes(".m3u8")) {
                        out.hls.push({ url, source: "api_v2" });
                    }
                }
                out.debug.hits.push("api_v2.variants");
            }
        }
    }

    // ---------- 2) legacy / GraphQL media entities ----------
    function extractLegacyMedia(mediaArr, tag) {
        if (!Array.isArray(mediaArr)) return;

        for (const m of mediaArr) {
            // thumbnail
            if (m.media_url_https || m.media_url) {
                uniq(out.thumbnails, normalizeUrl(m.media_url_https || m.media_url));
                out.debug.hits.push(`${tag}.media_url`);
            }
            // sometimes present
            if (m.video_info?.poster_image) {
                uniq(out.thumbnails, normalizeUrl(m.video_info.poster_image));
                out.debug.hits.push(`${tag}.poster_image`);
            }

            // variants
            const vars = m.video_info?.variants;
            if (Array.isArray(vars)) {
                for (const v of vars) {
                    const url = normalizeUrl(v.url);
                    if (!url) continue;
                    if (v.content_type === "video/mp4" || url.includes(".mp4")) {
                        out.mp4.push({ url, bitrate: v.bitrate ?? v.bit_rate ?? null, source: tag });
                    } else if (v.content_type === "application/x-mpegURL" || url.includes(".m3u8")) {
                        out.hls.push({ url, source: tag });
                    }
                }
                out.debug.hits.push(`${tag}.variants`);
            }
        }
    }

    walk(root, (node) => {
        if (node?.legacy?.extended_entities?.media) extractLegacyMedia(node.legacy.extended_entities.media, "graphql.legacy");
        if (node?.extended_entities?.media) extractLegacyMedia(node.extended_entities.media, "legacy");
    });

    // ---------- 3) Cards (more complete) ----------
    const PLAYER_KEYS = new Set([
        "player_url",
        "player_stream_url",
        "amplify_url_vmap",
        "amplify_url",
        "card_url",
        "summary_url",
        "vanity_url",
    ]);

    // keys that often represent an image/thumbnail binding
    const THUMB_KEYS = new Set([
        "thumbnail_image",
        "thumbnail_image_original",
        "player_image",
        "summary_photo_image",
        "photo_image_full_size",
        "photo_image_full_size_small",
        "photo_image_full_size_original",
        "large_image",
        "small_image",
        "cover_image",
    ]);

    function addIfUrlLike(str, bucket, hitTag) {
        const u = normalizeUrl(str);
        if (!u) return;

        // images
        if (u.match(/\.(jpg|jpeg|png|webp)(\?|$)/i) || u.includes("twimg.com/media/")) {
            uniq(out.thumbnails, u);
            if (hitTag) out.debug.hits.push(hitTag);
            return;
        }

        // playlists / mp4
        if (u.includes(".m3u8")) {
            out.hls.push({ url: u, source: "card" });
            if (hitTag) out.debug.hits.push(hitTag);
            return;
        }
        if (u.includes(".mp4")) {
            out.mp4.push({ url: u, bitrate: null, source: "card" });
            if (hitTag) out.debug.hits.push(hitTag);
            return;
        }

        // player/external urls
        if (u.startsWith("http")) {
            uniq(out.players, u);
            if (hitTag) out.debug.hits.push(hitTag);
        }
    }

    // binding value can be many types: string_value, image_value.url, etc.
    function extractUrlsFromBindingValue(value, keyHint) {
        if (!value) return;

        // GraphQL shape: { string_value: "..." }
        if (typeof value.string_value === "string") {
            addIfUrlLike(value.string_value, "string", `card.${keyHint}.string_value`);
        }

        // GraphQL sometimes: { url: "..." } directly
        if (typeof value.url === "string") {
            addIfUrlLike(value.url, "url", `card.${keyHint}.url`);
        }

        // image_value shapes:
        // { image_value: { url: "..." } }
        if (isObj(value.image_value) && typeof value.image_value.url === "string") {
            addIfUrlLike(value.image_value.url, "image", `card.${keyHint}.image_value.url`);
        }
        // { image_value: { image_value: { url: "..." } } } (yes, seen)
        if (isObj(value.image_value) && isObj(value.image_value.image_value) && typeof value.image_value.image_value.url === "string") {
            addIfUrlLike(value.image_value.image_value.url, "image", `card.${keyHint}.image_value.image_value.url`);
        }

        // Some shapes: { image_value: { alt: "...", ... } } -> ignore non-url
    }

    function extractFromCardObject(card) {
        if (!isObj(card)) return;

        const bv = card.binding_values;

        // Case A: array of { key, value }
        if (Array.isArray(bv)) {
            for (const item of bv) {
                const key = item?.key;
                const value = item?.value;

                if (!key || !value) continue;

                // unified_card is a JSON string blob
                if (key === "unified_card" && typeof value.string_value === "string") {
                    parseUnifiedCard(value.string_value);
                    continue;
                }

                // player-ish keys
                if (PLAYER_KEYS.has(key)) extractUrlsFromBindingValue(value, key);

                // thumb-ish keys
                if (THUMB_KEYS.has(key)) extractUrlsFromBindingValue(value, key);

                // also scan all binding values for any obvious twimg media url
                // (cards sometimes stash a thumbnail in an unexpected key)
                extractUrlsFromBindingValue(value, key);
            }
            out.debug.hits.push("card.binding_values[array]");
            return;
        }

        // Case B: object map { key: { ...value... }, key2: { ... } }
        if (isObj(bv)) {
            for (const [key, value] of Object.entries(bv)) {
                if (!value) continue;

                // unified_card may be at bv.unified_card.string_value in map form
                if (key === "unified_card" && typeof value.string_value === "string") {
                    parseUnifiedCard(value.string_value);
                    continue;
                }

                if (PLAYER_KEYS.has(key) || THUMB_KEYS.has(key)) extractUrlsFromBindingValue(value, key);
                extractUrlsFromBindingValue(value, key);
            }
            out.debug.hits.push("card.binding_values[object]");
        }
    }

    function parseUnifiedCard(unifiedCardStr) {
        try {
            const uj = JSON.parse(unifiedCardStr);

            // 1) Collect media IDs referenced by component_objects (media_1, media_2, …)
            const mediaIds = new Set();

            const co = uj?.component_objects;
            if (co && typeof co === "object") {
                for (const [k, v] of Object.entries(co)) {
                    // Usually keys like "media_1", "media_2"
                    const id = v?.data?.id;
                    if (id != null) mediaIds.add(String(id));
                }
            }

            // Some unified cards reference media IDs elsewhere too (optional extra net)
            // e.g. uj?.components?.[...]
            // We'll keep it conservative; you can extend if you see other layouts.

            // 2) Resolve media_entities with those IDs
            const mediaEntities = uj?.media_entities;
            if (mediaEntities && typeof mediaEntities === "object") {
                for (const id of mediaIds) {
                    const ent = mediaEntities[id];
                    if (!ent) continue;

                    // thumbnail candidates
                    const thumb =
                        ent?.media_url_https ||
                        ent?.media_url ||
                        ent?.poster_image ||                  // sometimes present directly
                        ent?.video_info?.poster_image;        // sometimes present under video_info
                    if (thumb) {
                        uniq(out.thumbnails, normalizeUrl(thumb));
                        out.debug.hits.push("card.unified_card.media_entities.thumbnail");
                    }

                    // Extract variants from video_info (native video / animated_gif)
                    const variants = ent?.video_info?.variants;
                    if (Array.isArray(variants)) {
                        for (const v of variants) {
                            const url = normalizeUrl(v?.url);
                            if (!url) continue;

                            const ct = v?.content_type;
                            if (ct === "video/mp4" || url.includes(".mp4")) {
                                out.mp4.push({
                                    url,
                                    bitrate: v?.bitrate ?? v?.bit_rate ?? null,
                                    source: "card.unified_card.media_entities.video_info"
                                });
                            } else if (ct === "application/x-mpegURL" || url.includes(".m3u8")) {
                                out.hls.push({
                                    url,
                                    source: "card.unified_card.media_entities.video_info"
                                });
                            }
                        }
                        out.debug.hits.push("card.unified_card.media_entities.video_info.variants");
                    }
                }

                // (Optional) If no component_objects IDs were found, fall back to scanning ALL media_entities
                // This covers some unified cards that skip component_objects.
                if (mediaIds.size === 0) {
                    for (const ent of Object.values(mediaEntities)) {
                        const thumb = ent?.media_url_https || ent?.media_url || ent?.video_info?.poster_image;
                        if (thumb) uniq(out.thumbnails, normalizeUrl(thumb));

                        const variants = ent?.video_info?.variants;
                        if (Array.isArray(variants)) {
                            for (const v of variants) {
                                const url = normalizeUrl(v?.url);
                                if (!url) continue;
                                const ct = v?.content_type;
                                if (ct === "video/mp4" || url.includes(".mp4")) out.mp4.push({ url, bitrate: v?.bitrate ?? v?.bit_rate ?? null, source: "card.unified_card.media_entities[fallback]" });
                                else if (ct === "application/x-mpegURL" || url.includes(".m3u8")) out.hls.push({ url, source: "card.unified_card.media_entities[fallback]" });
                            }
                        }
                    }
                    out.debug.hits.push("card.unified_card.media_entities.fallback_scan");
                }
            }

            // 3) Keep your existing “string scan” as a last resort (thumb/player urls)
            walk(uj, (n) => {
                if (typeof n === "string") addIfUrlLike(n, "unified", "card.unified_card.scan");
            });

            out.debug.hits.push("card.unified_card");
        } catch {
            // ignore
        }
    }

    // Find cards anywhere (root.card, legacy.card, card.legacy.binding_values, card.legacy.card, quoted tweet card, etc.)
    walk(root, (node) => {
        // Standard
        if (node?.card) extractFromCardObject(node.card);
        if (node?.legacy?.card) extractFromCardObject(node.legacy.card);

        // ✅ Missing case: card.legacy.binding_values (or card.legacy.*)
        if (node?.card?.legacy) extractFromCardObject(node.card.legacy);

        // Optional: sometimes people encounter card.legacy.card (rare, but harmless)
        if (node?.card?.legacy?.card) extractFromCardObject(node.card.legacy.card);
    });

    // ---------- 4) pick best ----------
    if (out.mp4.length) {
        // sort by bitrate desc (null last)
        out.mp4.sort((a, b) => (b.bitrate ?? -1) - (a.bitrate ?? -1));
        out.best = out.mp4[0].url;
    } else if (out.hls.length) {
        out.best = out.hls[0].url;
    } else if (out.players.length) {
        out.best = out.players[0];
    }

    // best thumbnail: prefer twimg.com/media or explicit preview images first
    if (out.thumbnails.length) {
        out.thumbnails.sort((a, b) => {
            const score = (u) =>
                (u.includes("twimg.com/media/") ? 100 : 0) +
                (u.includes("pbs.twimg.com") ? 50 : 0) +
                (u.match(/\bname=orig\b/) ? 10 : 0);
            return score(b) - score(a);
        });
        out.bestThumbnail = out.thumbnails[0];
    }

    // de-dup mp4/hls arrays by url
    const dedupeByUrl = (arr) => {
        const seen = new Set();
        return arr.filter((x) => {
            const u = x?.url;
            if (!u || seen.has(u)) return false;
            seen.add(u);
            return true;
        });
    };
    out.mp4 = dedupeByUrl(out.mp4);
    out.hls = dedupeByUrl(out.hls);

    // de-dup players/thumbnails
    out.players = Array.from(new Set(out.players));
    out.thumbnails = Array.from(new Set(out.thumbnails));

    return out;
}

module.exports = {
    inject: function () {
        logger.debug("messaging.listenerMap=", window._mid_?.messaging?.listenerMap);
        const o = require("./return-message.js").init();
        o.options = {
            "downloadVideo": {
                index: 1,
                label: "Download Video",
                type: "checkbox",
                checked: true
            }
        };

        cache.guestToken = cache.guestToken ?? null;
        cache.guestTokenLastRefresh = cache.guestTokenLastRefresh ?? 0;
        cache.queryId = cache.queryId ?? null;

        loadPerisistedSiteOptionsAndOnChange(o.host, o.options, ({ options }) => {
            o.images.length = 0; // reset images

            // single post page vs timeline page
            const articleSelector = document.querySelector("article[tabindex='-1']") ? "article[tabindex='-1']" : "article[data-testid='tweet']";

            // images
            utils.pushArray(
                o.images,
                utils.findDOMsWithCssSelector(
                    document,
                    articleSelector + " div[data-testid='tweetPhoto'] > img",
                    getLargeImgFromDom
                )
            );

            // video
            if (options?.downloadVideo?.checked) {
                utils.pushArray(
                    o.images,
                    utils.findDOMsWithCssSelector(
                        document,
                        articleSelector + " div[data-testid='videoComponent'] video",
                        (dom) => {
                            const url = dom?.closest("article[data-testid='tweet']")?.querySelector("time")?.closest("a")?.href;
                            return url ? { url: url, type: "msg", filename: getVideoFilenameFromStatusUrl(url, "mp4") } : null;
                        }
                    )
                );

                messaging.listenOnRuntime("getImageUrl", (msg, sendResponse) => {
                    if (msg?.url) {
                        const { statusId, userId } = getStatusIdFromUrl(msg.url);
                        logger.debug("statusId=", statusId);
                        if (statusId) {
                            Promise.resolve()
                                // get query id
                                .then(() => {
                                    // cache for as long as we can
                                    if (cache.queryId) { 
                                        return cache.queryId;
                                    }

                                    logger.debug("Fetching queryId for TweetResultByRestId");
                                    return fetch("https://abs.twimg.com/responsive-web/client-web/main.294834ba.js", { credentials: "omit" })
                                        .then(r => r.text())
                                        .then(text => {
                                            for (const line of text.split("\n")) {
                                                const index = line.indexOf("operationName:\"TweetResultByRestId\"");
                                                if (index === -1) {
                                                    continue;
                                                }

                                                const part = line.substring(Math.max(0, index - 100), Math.min(index + 100, line.length));
                                                logger.debug("part=", part);
                                                // match queryId:"aFvUsJm2c-oDkJV75blV6g"
                                                const m = part.match(/queryId\s*:\s*"([^"]+)"/)
                                                if (m) {
                                                    cache.queryId = m[1];
                                                    logger.debug("queryId=", cache.queryId);
                                                    return m[1];
                                                }
                                            }
                                        });
                                })

                                // get guest token
                                .then(() => {
                                    // cache guest token for 3 minutes
                                    if (cache.guestToken != null && ((Date.now() - cache.guestTokenLastRefresh) < 3 * 60 * 1000)) {
                                        return cache.guestToken;
                                    }

                                    cache.guestTokenLastRefresh = Date.now();
                                    logger.debug("Refreshing guest token");
                                    return fetch("https://api.x.com/1.1/guest/activate.json", {
                                        method: "POST",
                                        headers: {
                                            "Authorization": `Bearer ${WEB_BEARER_TOKEN}`,
                                            "Accept": "*/*",
                                            "User-Agent": navigator.userAgent
                                        },
                                        credentials: "omit"
                                    })
                                    .then(r => r.json()).then(j => j.guest_token);
                                })
                                .then(token => {
                                    logger.debug("guestToken=", cache.guestToken, "token=", token);
                                    cache.guestToken = token;

                                    const variables = { "tweetId": statusId, "withCommunity": false, "includePromotedContent": false, "withVoice": false }
                                    const url = `https://api.x.com/graphql/${cache.queryId}/TweetResultByRestId?variables=${encodeURIComponent(JSON.stringify(variables))}` +
                                        "&features=%7B%22creator_subscriptions_tweet_preview_api_enabled%22%3Atrue%2C%22premium_content_api_read_enabled%22%3Afalse%2C%22communities_web_enable_tweet_community_results_fetch%22%3Atrue%2C%22c9s_tweet_anatomy_moderator_badge_enabled%22%3Atrue%2C%22responsive_web_grok_analyze_button_fetch_trends_enabled%22%3Afalse%2C%22responsive_web_grok_analyze_post_followups_enabled%22%3Afalse%2C%22responsive_web_jetfuel_frame%22%3Atrue%2C%22responsive_web_grok_share_attachment_enabled%22%3Atrue%2C%22articles_preview_enabled%22%3Atrue%2C%22responsive_web_edit_tweet_api_enabled%22%3Atrue%2C%22graphql_is_translatable_rweb_tweet_is_translatable_enabled%22%3Atrue%2C%22view_counts_everywhere_api_enabled%22%3Atrue%2C%22longform_notetweets_consumption_enabled%22%3Atrue%2C%22responsive_web_twitter_article_tweet_consumption_enabled%22%3Atrue%2C%22tweet_awards_web_tipping_enabled%22%3Afalse%2C%22responsive_web_grok_show_grok_translated_post%22%3Afalse%2C%22responsive_web_grok_analysis_button_from_backend%22%3Atrue%2C%22creator_subscriptions_quote_tweet_preview_enabled%22%3Afalse%2C%22freedom_of_speech_not_reach_fetch_enabled%22%3Atrue%2C%22standardized_nudges_misinfo%22%3Atrue%2C%22tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled%22%3Atrue%2C%22longform_notetweets_rich_text_read_enabled%22%3Atrue%2C%22longform_notetweets_inline_media_enabled%22%3Atrue%2C%22profile_label_improvements_pcf_label_in_post_enabled%22%3Atrue%2C%22responsive_web_profile_redirect_enabled%22%3Afalse%2C%22rweb_tipjar_consumption_enabled%22%3Atrue%2C%22verified_phone_label_enabled%22%3Afalse%2C%22responsive_web_grok_image_annotation_enabled%22%3Atrue%2C%22responsive_web_grok_imagine_annotation_enabled%22%3Atrue%2C%22responsive_web_grok_community_note_auto_translation_is_enabled%22%3Afalse%2C%22responsive_web_graphql_skip_user_profile_image_extensions_enabled%22%3Afalse%2C%22responsive_web_graphql_timeline_navigation_enabled%22%3Atrue%2C%22responsive_web_enhance_cards_enabled%22%3Afalse%7D&fieldToggles=%7B%22withArticleRichContentState%22%3Atrue%2C%22withArticlePlainText%22%3Afalse%2C%22withGrokAnalyze%22%3Afalse%2C%22withDisallowedReplyControls%22%3Afalse%7D"

                                    return fetch(url, {
                                        headers: {
                                            "authorization": `Bearer ${WEB_BEARER_TOKEN}`,
                                            "x-guest-token": cache.guestToken,
                                            "x-twitter-active-user": "yes",
                                            "x-twitter-client-language": navigator.language,
                                            "user-agent": navigator.userAgent,
                                            "accept": "*/*"
                                        },
                                        credentials: "omit"
                                    });
                                })
                                .then(resp => resp.json())
                                .then(json => {
                                    if (json?.data?.tweetResult?.result?.rest_id === statusId) {
                                        const v = extractXVideoAndThumbnail(json);
                                        logger.debug("Extract video links v=", v);
                                        if (v?.mp4?.length > 0) {
                                            const filename = getVideoFilenameFromStatusUrl(msg.url, utils.getFileExt(v.best));
                                            return {
                                                url: v.best,
                                                thumbnail: v.bestThumbnail,
                                                filename: filename ?? utils.getFileName(v.best)
                                            };
                                        }
                                    } else {
                                        logger.debug("REST id mismatch rest_id=", json?.data?.tweetResult?.result?.rest_id, "statusId=", statusId);
                                    }
                                    logger.debug("Video not found in json=", json);
                                })
                                .then(img => sendResponse(img));

                            return true; // enable async response
                        }
                    }
                });
            }

            messaging.sendToRuntime("updateResult", o);
        });


        o.ext = "jpg";
        return require("./return-message.js").loading(o);
    },
    host: "twitter.com",
    altHosts: ["x.com"],
    hidden: true,
    getLargeImg,
    re,
    getStatusIdFromUrl
};
