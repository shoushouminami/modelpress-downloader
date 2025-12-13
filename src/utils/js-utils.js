/**
 * Use {WeakMap} to create a local object identifier
 */
const idMap = new WeakMap();
idMap.nextId = 1;

function getObjectId(obj) {
    if (!idMap.has(obj)) {
        idMap.set(obj, idMap.nextId++)
    }
    return idMap.get(obj);
}

/**
 * @returns Call stack for debugging purpose
 */
function getCallStack() {
    return new Error("Debug").stack;
}

module.exports = {
    getObjectId,
    getCallStack
};
