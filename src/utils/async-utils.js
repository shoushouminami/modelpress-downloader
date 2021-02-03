/**
 * Returns a Promise that is fulfilled after waitMs milliseconds
 * @return {Promise<void>}
 */
function wait(waitMs) {
    return new Promise(function(resolve) {
        setTimeout(resolve, waitMs);
    });
}

exports.wait = wait;
