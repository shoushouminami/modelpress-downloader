const wait = function(time) {
    return new Promise(function(resolve) {
        setTimeout(resolve, time)
    })
};

const scrollToBottom = async function(page) {
   // Get the height of the rendered page
    const bodyHandle = await page.$('body');
    const height = await page.evaluate(body => body.scrollHeight, bodyHandle);
    await bodyHandle.dispose();

    // Scroll one viewport at a time, pausing to let content load
    const viewportHeight = page.viewport().height;
    let viewportIncr = 0;
    while (viewportIncr + viewportHeight < height) {
        await page.evaluate(_viewportHeight => {
            window.scrollBy(0, _viewportHeight);
        }, viewportHeight);
        await wait(300);
        viewportIncr += viewportHeight;
    }

    // Scroll back to top
    await page.evaluate(_ => {
        window.scrollTo(0, 0);
    });
};

module.exports = {
    scrollToBottom: scrollToBottom
};