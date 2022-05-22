const storage = require("./storage");
const config = require("./config");
const STORAGE_KEY = "recent_sites";
const RECENT_LIMIT = 12;

function getRecentSites() {
    if (!config.keepRecentClicks()) {
        return [];
    }
    let serialized = storage.get(STORAGE_KEY);
    if (serialized) {
        return JSON.parse(serialized);
    } else {
        return [];
    }
}

function addRecentSite(newSite) {
    if (!config.keepRecentClicks()) {
        return;
    }
    let sites = getRecentSites();
    if (sites == null) {
        sites = [];
    }

    if (sites.indexOf(newSite) > -1) {
        sites.splice(sites.indexOf(newSite), 1);
    }

    sites.unshift(newSite)

    if (sites.length > RECENT_LIMIT) {
        sites.pop();
    }

    storage.set(STORAGE_KEY, JSON.stringify(sites));
}

function clearRecentSites() {
    // no need to check config. always clear.
    storage.set(STORAGE_KEY, "[]");
}

exports.addRecentSite = addRecentSite;
exports.getRecentSites = getRecentSites;
exports.clearRecentSites = clearRecentSites;
