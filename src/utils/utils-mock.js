const utils = require("../utils");

export function fetchUrl(url) {
    return new Promise(function (resolve, reject) {
        // resolve(JSON.stringify(require("./mdpr-dummy-response")));
        reject(500, "bad 500");
    });
}

export const pushArray = utils.pushArray;
export const pushIfNew = utils.pushIfNew;
