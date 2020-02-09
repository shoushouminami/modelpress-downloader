const wait = function(time) {
    return new Promise(function(resolve) {
        setTimeout(resolve, time)
    })
};

const scrollToBottom = async function(page, waitTimeMs = 300) {
    return scrollTo(page, 100, waitTimeMs);
};

const scrollTo = async function(page, percentage = 100, waitTimeMs = 300) {
    // Get the height of the rendered page
    let bodyHandle = await page.$('body');
    let height = await page.evaluate(body => body.scrollHeight, bodyHandle);
    await bodyHandle.dispose();

    // Scroll one viewport at a time, pausing to let content load
    let viewportHeight = page.viewport().height;
    let scrolled = 0;
    while (scrolled + viewportHeight < height) {
        await page.evaluate(_viewportHeight => {
            window.scrollBy(0, _viewportHeight);
        }, viewportHeight);
        await wait(waitTimeMs);
        scrolled += viewportHeight;
        if ((scrolled + viewportHeight) * 1.0 / height >= (percentage / 100.0)) {
            break;
        }
    }

    // Scroll back to top
    await page.evaluate(_ => {
        window.scrollTo(0, 0);
    });
};

module.exports = {
    scrollToBottom: scrollToBottom,
    scrollTo: scrollTo
};