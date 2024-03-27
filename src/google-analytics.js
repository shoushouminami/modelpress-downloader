const {getWindow, getExtensionVersion} = require("./globals");
const runtime = require("./runtime");
const {getGA4UID} = require("./ga/ga4-uid");
const logger = require("./logger2")(module.id);

const GA_PROPERTY_ID = __GA_PROPERTY__; // defined in webpack.config.js
const GA4_MEASUREMENT_ID = __GA4_MEASUREMENT_ID__; // defined in webpack.config.js
const GA4_MEASUREMENT_SECRET = __GA4_MEASUREMENT_SECRET__; // defined in webpack.config.js
const NOT_CALLED = 0;
const CID = "mid-v" + getExtensionVersion();
const SESSION_ID = Math.round(new Date().getTime() / 1000).toString();

// 0 - not boostrapped; 1 - successful ; 2 - failed;
let bootstrapped = NOT_CALLED;

/**
 * @param category {string}
 * @param action {string}
 * @param label {string?}
 * @param value {number?}
 */
function trackEvent(category, action, label, value) {
    return _apiTrackEvent(category, action, label, value);
}

function trackDownload(site, count) {
    trackEvent("download", "clicked", site, count);
}

function trackSupport(site, supported) {
    trackEvent("website", supported ? "supported" : "not_supported", site);
}

/**
 * Track the event by sending a HTTP POST request to GA API
 * @param category required
 * @param action required
 * @param label optional
 * @param value optional
 */
function _apiTrackEvent(category, action, label, value){
    return apiTrack("event", category, action, label, value)
}

function _apiTrackPageview(docHost, docPath){
    docPath = String(docPath); // just in case
    if (docPath.startsWith("./src")) {
        docPath = docPath.substring(5);
    }
    return apiTrack("pageview", null, null, null, null, docHost, docPath);
}

/**
 * Check GA doc https://developers.google.com/analytics/devguides/collection/protocol/v1/parameters#t
 */
function apiTrack(hitType, category, action, label, value, docHost, docPath){
    const data = {
        // API Version.
        v: '1',
        // Tracking ID / Property ID.
        tid: GA_PROPERTY_ID,
        cid: getCid(),
        // hit type.
        t: hitType,
        // Event category.
        ec: category,
        // Event action.
        ea: action,
        ul: getWindow().navigator.language
    };

    // label is optional
    if (label != null) {
        data.el = label;
        // value is optional
        if (value != null) {
            data.ev = value;
        }
    }

    if (docHost != null) {
        data.dh = docHost;
    }

    if (docPath != null) {
        data.dp = docPath;
    }

    logger.debug("apiTrack hit=", hitType, "event=send category=", category, "data=", data);
    fetch("https://www.google-analytics.com/collect", {
        method: "POST",
        body: Object.keys(data).map(k => k + "=" + data[k]).join("&")
    }).then(function (resp) {
        logger.debug("apiTrack hit=", hitType, "event=success status=", resp.status, "category=", category, "resp=", resp)
    }, function (error) {
        logger.debug("apiTrack hit=", hitType, "event=failure category=", category, "resp=", error);
    });

    // GA4
    // if (hitType === "event") {
    //     apiTrackToGA4(category, action, label, value);
    // }
}

class Builder {
    _event;
    _clientId = getCid();
    _userId;
    _params = {};
    _userProperties = {};
    event(event) {
        this._event = event;
        return this;
    }
    clientId(clientId) {
        this._clientId = clientId;
        return this;
    }
    userId(userId) {
        this._userId = userId;
        return this;
    }
    params(params) {
        if (params) {
            Object.assign(this._params, params);
        }
        return this;
    }
    param(key, value) {
        this._params[key] = value;
        return this;
    }
    userProperties(properties) {
        Object.assign(this._userProperties, properties);
        return this;
    }
    userProperty(key, value) {
        this._userProperties[key] = value;
        return this;
    }
    engagementTimeMS(timeMS = 100) {
        return this.params({
            "engagement_time_msec": timeMS,
            "session_id": SESSION_ID
        });
    }
    send() {
        const builder = this;
        const eventBody = {
            "client_id": builder._clientId,
            "events": [{
                "name": builder._event,
                "params": builder._params
            }]
        };
        if (builder._userId) {
            eventBody["user_id"] = builder._userId;
            if (builder._userProperties) {
                eventBody["user_properties"] = builder._userProperties;
            }
        }

        const body = JSON.stringify(eventBody);
        fetch(`https://www.google-analytics.com/mp/collect?measurement_id=${GA4_MEASUREMENT_ID}&api_secret=${GA4_MEASUREMENT_SECRET}`, {
            method: "POST",
            body: body
        }).then(function (resp) {
            logger.debug("Builder.send result=success status=", resp.status, "event=", builder._event, "body=", eventBody, "resp=", resp)
        }, function (error) {
            logger.debug("apiTrackToGA4 result=failure event=", builder._event, "body=", eventBody, "resp=", error);
        });
    }

}

function builder(event) {
    const b = new Builder();
    if (event) {
        b.event(event);
    }
    return b;
}

function getCid() {
    return CID;
}

function bootstrapGA4() {
    builder()
        .event(runtime.isServiceWorker() ? "bg_bootstrap" : "bootstrap")
        .param("ext_ver", getExtensionVersion())
        .send();
}

/**
 * Track GA4 event.
 */
function _trackEventGA4(event, params, userId = undefined) {
    builder()
        .event(event)
        .userId(userId)
        .params(params)
        .send();
}

function trackEventGA4(event, params) {
    return _trackEventGA4(event, params, getGA4UID());
}

exports.trackEvent = trackEvent;
exports.trackDownload = trackDownload;
exports.trackSupport = trackSupport;
exports.bootstrapGA4 = bootstrapGA4;
exports.trackEventGA4 = trackEventGA4;
