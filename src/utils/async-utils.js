/**
 * Returns a Promise that is fulfilled after waitMs milliseconds
 * @return {Promise<void>}
 */
function wait(waitMs) {
    return new Promise(function(resolve) {
        setTimeout(resolve, waitMs);
    });
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

exports.wait = wait;
exports.every = every;
