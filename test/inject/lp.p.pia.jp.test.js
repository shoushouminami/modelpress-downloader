const { testDirectDownload, getBrowserFactory } = require("./testbase");
const pageutils = require("../pageutils");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test news article page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://lp.p.pia.jp/shared/cnt-s/cnt-s-11-02_2_39b13c71-5018-44ea-bbf2-1fb829c85af8.html",
        "lp.p.pia.jp-shared-cnt-s-cnt-s-11-02_2_39b13c71-5018-44ea-bbf2-1fb829c85af8.html/",
        [
            "https://lp.p.pia.jp/shared/materials/7b7b33a1-3343-46a5-b654-004f4d2160d1/origin.jpg",
            "https://lp.p.pia.jp/shared/materials/4afd66cb-21f9-4487-b031-eb56080e72b0/origin.jpg",
            "https://lp.p.pia.jp/shared/materials/1eeda202-8535-4219-b30f-8dd05b398ea2/origin.jpg",
            "https://lp.p.pia.jp/shared/materials/d47b76c4-8f9e-406a-a104-09417b007ec1/origin.jpg"
        ],
        {
            preinject: async function (page) {
                await pageutils.scrollToBottom(page);
            }
        }
    );
});

test("Test news article page with gallery", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://lp.p.pia.jp/shared/cnt-s/cnt-s-11-02_2_1710d56a-2c58-4e14-8a8d-4d826b1713db.html",
        "lp.p.pia.jp-shared-cnt-s-cnt-s-11-02_2_1710d56a-2c58-4e14-8a8d-4d826b1713db.html/",
        [
            "https://lp.p.pia.jp/shared/materials/9d528281-ad55-481f-9750-7a51e959b87d/origin.jpg",
            "https://lp.p.pia.jp/shared/materials/22185936-cc55-4258-aa07-e11d0240725f/origin.jpg",
            "https://lp.p.pia.jp/shared/materials/605b8ff4-1fd3-4c92-b1cc-28956fb02147/origin.jpg",
            "https://lp.p.pia.jp/shared/materials/45ac5b45-c6fb-4ebe-8781-069b6308b290/origin.jpg",
            "https://lp.p.pia.jp/shared/materials/ffda8ed3-721f-40d8-b3b8-d4c5367041a5/origin.jpg"
        ],
        {
            preinject: async function (page) {
                await pageutils.scrollToBottom(page);
            }
        }
    );
});