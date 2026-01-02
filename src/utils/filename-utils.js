const logger = require("../logger2")(module.id);
const { getWindow } = require("../globals");
const { replaceSpecialChars, getFileName } = require("../utils");
const { replaceIllegalChars, removeSpace } = require("./str-utils");

/**
 * Resolvs a pattern string such as "{host}-{pathname}-{filename}" with a possible pattern list and pattern mapping context. All the individual patterns
 * are replaced with values given in the mapping context.
 * 
 * The pattern replacement is one-time without recursion. Therefore if a pattern value in the context contains another pattern, it will not be replaced again.
 * 
 * @param {*} pattern A pattern string such as "{host}-{pathname}-{filename}"
 * @param {*} possiblePatternList A list of possible patterns (with {}). Only patterns given in this list are resolved.
 * @param {*} downloadContext An object contains the value of what each pattern should replaced with. Such as `{"host": "www.example.com", "pathname": "/a/b/c/d.jpg"}`
 *                              Note that the key should be without `{}`
 * @returns The resolved string. Any pattern not given in the `possiblePatternList` or in the context is replaced with an empty string.
 */
function resolvePattern(pattern, possiblePatternList, downloadContext) {
    const replacementMap = {};
    possiblePatternList.forEach(p => {
        if (typeof p === "string" && p.length > 4 && p[0] === "{" && p[p.length - 1] === "}") {
            const patternName = p.slice(1, -1);
            // the key is pattern without {} 
            replacementMap[patternName] = downloadContext[patternName]; // could be undefined
        } else {
            logger.error("func=resolvePattern bad pattern", p);
        }
    });

    return applyPattern(pattern, replacementMap);
}

function applyPattern(pattern, values) {
    return pattern.replace(/\{([A-Za-z0-9_]{3,})\}/g, (match, key) => {
        return values[key] != null ? values[key] : "";
    });
}

/**
 * This function supercedes {@link downloader.getFolderFilename()}
 * @param {*} folderOpt 
 * @param {*} filenameOpt 
 * @param {*} context 
 */
function getFolderFilenameV2(imageJob, folderOpt, filenameOpt) {
    const context = imageJob.context;
    const folder = replaceSpecialChars(decodeURI(resolvePattern(folderOpt.value, folderOpt.possiblePatternList, context)).replace(/\//g, "-"));
    const filename = replaceSpecialChars(decodeURI(
        resolvePattern(
            filenameOpt.value,
            filenameOpt.possiblePatternList,
            Object.assign({}, context, { filename: getFileName(imageJob.url, context.ext, imageJob.filename) })
        )).replace(/\//g, "-"));

    return folder + "/" + (imageJob.jobId != null ? imageJob.jobId + "-" : "") + filename;
}

/**
 * Use <domain>-<title> as folder name.
 */
function getFolderNameFromTitle() {
    const w = getWindow();
    return w.location.host
        + "-"
        + replaceIllegalChars(removeSpace(w.document.title.split("|")?.[0]))
        + "/";
}

module.exports = {
    resolvePattern,
    applyPattern,
    getFolderFilenameV2,
    getFolderNameFromTitle
}
