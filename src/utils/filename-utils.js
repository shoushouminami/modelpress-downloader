const logger = require("../logger2")(module.id);
const { replaceSpecialChars, getFileName } = require("../utils");

function resolvePattern(pattern, possiblePatternList, downloadContext) {
    const replacementMap = {};
    possiblePatternList.forEach(p => {
        if (typeof p === "string" && p.length > 4 && p[0] === "{" && p[p.length - 1] === "}") {
            const patternName = p.slice(1, -1);
            // the key is pattern with {} 
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

module.exports = {
    resolvePattern,
    applyPattern,
    getFolderFilenameV2
}
