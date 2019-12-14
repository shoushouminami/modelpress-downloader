
const testDirectDownload = async function (browser, url, folder, images, ext) {
    const page = await browser.newPage();
    await page.goto(url);
    await page.addScriptTag({path: "./mock.js"});
    await page.addScriptTag({path: "../src/inject.js"});

    const executionContext = await page.mainFrame().executionContext();
    const mid = await executionContext.evaluate("window._mid");
    expect(mid).toBeDefined();
    expect(mid['o']).toBeDefined();
    expect(mid['o']['supported']).toBeTruthy();
    expect(mid['o']['images']).toHaveLength(images.length);
    for (const image of images) {
        expect(mid['o']['images']).toContain(image);
    }
    expect(mid['o']['folder']).toBe(folder);

    if (ext) {
        expect(mid['o']['ext']).toBe(ext);
    }

    return mid;
};

exports.testDirectDownload = testDirectDownload;