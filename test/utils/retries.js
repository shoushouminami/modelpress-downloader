async function retries(count, testFunc) {
    if (typeof count !== "number") {
        throw new Error("Invalid count: " + count);
    }

    if (typeof testFunc !== "function") {
        throw new Error("Invalid test function: " + testFunc);
    }

    while (true) {
        try {
            if (testFunc.constructor.name === "AsyncFunction") {
                return await testFunc();
            } else {
                return testFunc();
            }
        } catch (e) {
            if (count <= 0) {
                throw e;
            }

            count--;
        }
    }
}

module.exports = retries;
