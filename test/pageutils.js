function wait(time) {
    return new Promise(function(resolve) {
        setTimeout(resolve, time)
    })
}

async function scrollToBottom(page, waitTimeMs = 300) {
    return scrollTo(page, 100, waitTimeMs);
}

async function getPageScrollHeight(page) {
    let bodyHandle = await page.$('body');
    let height = await page.evaluate(body => body.scrollHeight, bodyHandle);
    await bodyHandle.dispose();

    return height;
};

/**
 * 
 * @param page
 * @param percentage
 * @param waitTimeMs
 * @returns {Promise<void>}
 */
async function scrollTo(page, percentage = 100, waitTimeMs = 300) {
    scrollToTop(page);
    // Get the height of the rendered page
    let height = await getPageScrollHeight(page);

    // Scroll one viewport at a time, pausing in between to let content load
    let viewportHeight = page.viewport().height;
    let scrolled = 0;
    while (scrolled + viewportHeight < height) {
        await page.evaluate(_viewportHeight => {
            window.scrollBy(0, _viewportHeight);

        }, viewportHeight);
        await wait(waitTimeMs);
        scrolled += viewportHeight;
        height = await getPageScrollHeight(page);
        if ((scrolled + viewportHeight) * 1.0 / height >= (percentage / 100.0)) {
            break;
        }
    }

}

async function scrollToTop(page) {
    // Scroll back to top
    await page.evaluate(_ => {
        window.scrollTo({
            left: 0,
            top: 0
        });
    });
}

module.exports = {
    wait,
    scrollToBottom,
    getPageScrollHeight,
    scrollTo,
    scrollToTop
}
