/**
 * Take input of a module.exports object. Returns a function that can help to add export function to the input object.
 * <code>
 *     let expt = require("exports-utils")(module.exports);
 *     function myFunc() {}
 *     expt(myFunc); // equivalent to module.exports.myFunc = myFunc
 *     expt(myFunc, myFunc2, myFunc3); // can also call with multiple functions
 *     </code>
 * @param modExp
 * @return {*}
 */
module.exports = function (modExp) {
    if (modExp == null || modExp["exports"] !== undefined) {
        throw new Error("Need to require this module with: require(\"exports-util\")(module.exports)");
    }
    const exports = function (...functions) {
        for (func of functions) {
            if (typeof func !== "function") {
                throw new Error("Not a function: " + func);
            }
            if (func.name == null) {
                throw new Error("Cannot find function name from " + func);
            }
            modExp[func.name] = func;
        }
        return exports;
    }
    return exports;
}
