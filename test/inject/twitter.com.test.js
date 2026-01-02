const { testDirectDownload, getBrowserFactory } = require("./testbase");
const pageutils = require("../pageutils");

let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("nogizaka46/status/1773336164650676599", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://x.com/nogizaka46/status/1773336164650676599",
        "x.com-nogizaka46-status-1773336164650676599/",
        [
            "https://pbs.twimg.com/media/GJwn12GbwAAFkmE?format=jpg&name=4096x4096"
        ],
        {
            preinject: async function (page) {
                await pageutils.wait(3000);
                let executionContext = await page.mainFrame().executionContext();
                await executionContext.evaluate(() => {
                    try {
                        document.querySelectorAll("article")[0].querySelectorAll("div[aria-label=Image] img")[0].click();
                    } catch (ignored){}
                });
            }
        });
});

test("nogizaka46/status/1312658348064428032", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://x.com/nogizaka46/status/1312658348064428032",
        "x.com-nogizaka46-status-1312658348064428032/",
        [
            "https://pbs.twimg.com/media/Ejd_zkyVoAAAWxK?format=jpg&name=4096x4096",
            "https://pbs.twimg.com/media/Ejd_zkwU0AAvYze?format=jpg&name=4096x4096",
            "https://pbs.twimg.com/media/Ejd_zkwVoAEBXmV?format=jpg&name=4096x4096"
        ],
        {
            preinject: async function (page) {
                await pageutils.wait(6000);
            }
        });
});

test("nogizaka46/status/1312710164730970117", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://x.com/nogizaka46/status/1312710164730970117",
        "x.com-nogizaka46-status-1312710164730970117/",
        [
            "https://pbs.twimg.com/media/Ejeu7fDU0AIBJjC?format=jpg&name=4096x4096"
        ],
        {
            preinject: async function (page) {
                await pageutils.wait(2500);
                let executionContext = await page.mainFrame().executionContext();
                await executionContext.evaluate(() => {
                    try {
                        document.querySelectorAll("article")[0].querySelectorAll("div[aria-label=Image] img")[0].click();
                    } catch (ignored){}
                });
            }
        });
});

const { re, getStatusIdFromUrl } = require("../../src/inject/twitter.com");
describe("re", () => {
    test("re matches status url", async () => {
        let m = "https://x.com/nogizaka46/status/2006392891153985683".match(re);
        expect(m).toBeTruthy();
        expect(m[2]).toBe("2006392891153985683");

        m = "https://x.com/nogizaka46/status/2006392891153985683/".match(re);
        expect(m).toBeTruthy();
        expect(m[2]).toBe("2006392891153985683");
        
    });


    test("re matches photo url", async () => {
        let m = "https://x.com/nogizaka46/status/2006392891153985683/photo/1".match(re);
        expect(m).toBeTruthy();
        expect(m[1]).toBe("nogizaka46");
        expect(m[2]).toBe("2006392891153985683");
        expect(m[4]).toBe("1");

        m = "https://x.com/nogizaka46/status/2006392891153985683/photo/1/".match(re);
        expect(m).toBeTruthy();
        expect(m[1]).toBe("nogizaka46");
        expect(m[2]).toBe("2006392891153985683");
        expect(m[4]).toBe("1");

    });
});

describe("test getStatusIdFromUrl", () => {

    test("getStatusIdFromUrl matches photo url", async () => {
        expect(getStatusIdFromUrl("https://x.com/nogizaka46/status/2006392891153985683/photo/1")).toStrictEqual({
            statusId: "2006392891153985683",
            userId: "nogizaka46",
            photoId: "1"
        })
    });


    test("getStatusIdFromUrl returns all undefined", async () => {
        expect(getStatusIdFromUrl("https://x.com/bla/status/bla/1")).toStrictEqual({
            statusId: undefined,
            userId: undefined,
            photoId: undefined
        })
    });

    test("getStatusIdFromUrl returns userId and statusId", async () => {
        expect(getStatusIdFromUrl("https://x.com/nogizaka46/status/2006392891153985683")).toStrictEqual({
            statusId: "2006392891153985683",
            userId: "nogizaka46",
            photoId: undefined
        })
    });
});
