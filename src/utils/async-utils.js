/**
 * Returns a Promise that is fulfilled after waitMs milliseconds.
 * A function `cancel` is attached to the Promise for cancelling the underlying setTimeout timer.
 * If `cancel` is called, the Promise is cancelled sliently, ie will not resolve nor reject.
 * @return {Promise<void>}
 */
function wait(waitMs) {
    let timer = null;
    let settled = false;

    const promise = new Promise((resolve) => {
        timer = setTimeout(() => {
            settled = true;
            timer = null;
            resolve();
        }, waitMs);
    });

    promise.cancel = () => {
        if (settled) {
           return;
        }
        clearTimeout(timer);
    }

    return promise;
}

/**
 * Returns a thenable object that is fulfilled every waitMs milliseconds. (aka window.setInterval()).
 * Return true in your resolve function to terminate the loop
 * <pre>
 *  every(100).then((count) => {
 *      console.log("hello"); // prints "hello" every 100ms
 *      if (count == 3) { // for 3 times
 *          return true;
 *      }
 *  })
 * }
 * </pre>
 * @return {{then: function(resolve)}}
 */
function every(waitMs) {
    return {
        then: function (func) {
            let count = 0;
            const handle = setInterval(() => {
                if (func(++count) === true) {
                    clearInterval(handle);
                }
            }, waitMs);
        }
    }
}

/**
 * Run promise `p`. Set a timeout on the given Promise, and continues (ie call `resolve()`) when the timeout is met.
 * 
 * If the optional fallback function is provided, the fallback function is called instead.
 * 
 * NOTE: Does NOT cancel `p`.
 * 
 * @param {Promise} p 
 * @param {Number} timeoutMs 
 * @param {Function(): any | Promise<any>} fallback 
 * @returns 
 */
function continueIfTimeout(p, timeoutMs, fallback) {
    const timeoutPromise = wait(timeoutMs).then(() => {
        if (typeof fallback === "function") {
            return fallback();
        }
        return undefined;
    });
    const wrapPromise = Promise.resolve(p).finally(() => {
        // cancel timeout no matter resolve or reject
        timeoutPromise.cancel?.();
    });

    return Promise.race([
        wrapPromise, 
        timeoutPromise
    ]);
}

module.exports = {
    wait,
    every,
    continueIfTimeout
}
