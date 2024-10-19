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

module.exports = {
    getObjectId: getObjectId
};
