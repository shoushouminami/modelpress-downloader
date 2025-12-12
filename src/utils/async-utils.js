/**
 * Returns a Promise that is fulfilled after waitMs milliseconds.
 * A function `cancelWait` is attached to the Promise for cancelling the underlying setTimeout timer.
 * If `cancelWait` is called, the Promise is rejected with an error.
 * @return {Promise<void>}
 */
function wait(waitMs) {
    let timer;
    let rejectFn;

    const promise = new Promise(function (resolve, reject) {
        timer = setTimeout(resolve, waitMs);
        rejectFn = reject;
    });

    promise.cancel = () => {
        clearTimeout(timer);
        rejectFn?.(new Error("wait event cancelled"));
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

module.exports = {
    wait,
    every
}
