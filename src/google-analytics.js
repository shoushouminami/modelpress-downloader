const {getExtensionVersion} = require("./globals");
const runtime = require("./runtime");
const {getGA4UID} = require("./ga/ga4-uid");
const logger = require("./logger2")(module.id);

const GA4_MEASUREMENT_ID = __GA4_MEASUREMENT_ID__; // defined in webpack.config.js
const GA4_MEASUREMENT_SECRET = __GA4_MEASUREMENT_SECRET__; // defined in webpack.config.js
const CID = "mid-v" + getExtensionVersion();
const SESSION_ID = Math.round(new Date().getTime() / 1000).toString();

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
        .userId(getGA4UID())
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

module.exports = {
    bootstrapGA4,
    trackEventGA4
}
