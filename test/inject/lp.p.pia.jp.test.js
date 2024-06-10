const { testDirectDownload, getBrowserFactory } = require("./testbase");
const pageutils = require("../pageutils");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("article/news/371754/index.html", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://lp.p.pia.jp/article/news/371754/index.html",
        "lp.p.pia.jp-article-news-371754-index.html/",
        [
            "https://lp.p.pia.jp/shared/materials/ec94ad4f-8e67-4a58-bac1-b66a374015d9/origin.jpg",
            "https://lp.p.pia.jp/shared/materials/bfbff2ba-1934-49cf-a031-3e8416e85436/origin.jpg",
            "https://lp.p.pia.jp/shared/materials/16eaa24d-18ef-4af0-8c16-91ad50d5af95/origin.jpg",
            "https://lp.p.pia.jp/shared/materials/26c77081-4f27-4ebb-a38b-0166146bab4d/origin.jpg",
            "https://lp.p.pia.jp/shared/materials/8e481bf6-34ee-4044-bbcf-a252fd2f4890/origin.jpg"
        ]);
});

test("article/news/371754/photo-gallery/index.html", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://lp.p.pia.jp/article/news/371754/photo-gallery/index.html",
        "lp.p.pia.jp-article-news-371754-photo-gallery-index.html/",
        [
            "https://lp.p.pia.jp/shared/materials/ec94ad4f-8e67-4a58-bac1-b66a374015d9/origin.jpg",
            "https://lp.p.pia.jp/shared/materials/bfbff2ba-1934-49cf-a031-3e8416e85436/origin.jpg",
            "https://lp.p.pia.jp/shared/materials/16eaa24d-18ef-4af0-8c16-91ad50d5af95/origin.jpg",
            "https://lp.p.pia.jp/shared/materials/26c77081-4f27-4ebb-a38b-0166146bab4d/origin.jpg",
            "https://lp.p.pia.jp/shared/materials/8e481bf6-34ee-4044-bbcf-a252fd2f4890/origin.jpg",
            "https://lp.p.pia.jp/shared/materials/992bb752-0390-460f-863d-1717311c1ce8/origin.jpg",
            "https://lp.p.pia.jp/shared/materials/abf080c1-29b0-48d2-afd0-265176a34065/origin.jpg",
            "https://lp.p.pia.jp/shared/materials/efd795c9-0622-4e69-b11a-30a42d2f0959/origin.jpg",
            "https://lp.p.pia.jp/shared/materials/bf690485-e15e-4a91-b751-208b1f9091a8/origin.jpg",
            "https://lp.p.pia.jp/shared/materials/f9f82b52-396d-4e72-8491-6e31667efd24/origin.jpg",
            "https://lp.p.pia.jp/shared/materials/867b2b11-91ad-43e0-8dc6-12c729e19df2/origin.jpg",
            "https://lp.p.pia.jp/shared/materials/cb7e1573-bf50-469f-8725-8438dd31a1c3/origin.jpg",
            "https://lp.p.pia.jp/shared/materials/f37e4fa9-ed20-4c86-9371-2790e0f76713/origin.jpg",
            "https://lp.p.pia.jp/shared/materials/40068b98-d073-44e8-8274-54c48ea4f82c/origin.jpg",
            "https://lp.p.pia.jp/shared/materials/68a0c61e-ae3e-42b8-b586-d086c28c3c30/origin.jpg"
        ]);
});

test("article/news/371754/photo-gallery/index.html?id=2", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://lp.p.pia.jp/article/news/371754/photo-gallery/index.html?id=2",
        "lp.p.pia.jp-article-news-371754-photo-gallery-index.html/",
        [
            "https://lp.p.pia.jp/shared/materials/bfbff2ba-1934-49cf-a031-3e8416e85436/origin.jpg",
            "https://lp.p.pia.jp/shared/materials/ec94ad4f-8e67-4a58-bac1-b66a374015d9/origin.jpg",
            "https://lp.p.pia.jp/shared/materials/16eaa24d-18ef-4af0-8c16-91ad50d5af95/origin.jpg",
            "https://lp.p.pia.jp/shared/materials/26c77081-4f27-4ebb-a38b-0166146bab4d/origin.jpg",
            "https://lp.p.pia.jp/shared/materials/8e481bf6-34ee-4044-bbcf-a252fd2f4890/origin.jpg",
            "https://lp.p.pia.jp/shared/materials/992bb752-0390-460f-863d-1717311c1ce8/origin.jpg",
            "https://lp.p.pia.jp/shared/materials/abf080c1-29b0-48d2-afd0-265176a34065/origin.jpg",
            "https://lp.p.pia.jp/shared/materials/efd795c9-0622-4e69-b11a-30a42d2f0959/origin.jpg",
            "https://lp.p.pia.jp/shared/materials/bf690485-e15e-4a91-b751-208b1f9091a8/origin.jpg",
            "https://lp.p.pia.jp/shared/materials/f9f82b52-396d-4e72-8491-6e31667efd24/origin.jpg",
            "https://lp.p.pia.jp/shared/materials/867b2b11-91ad-43e0-8dc6-12c729e19df2/origin.jpg",
            "https://lp.p.pia.jp/shared/materials/cb7e1573-bf50-469f-8725-8438dd31a1c3/origin.jpg",
            "https://lp.p.pia.jp/shared/materials/f37e4fa9-ed20-4c86-9371-2790e0f76713/origin.jpg",
            "https://lp.p.pia.jp/shared/materials/40068b98-d073-44e8-8274-54c48ea4f82c/origin.jpg",
            "https://lp.p.pia.jp/shared/materials/68a0c61e-ae3e-42b8-b586-d086c28c3c30/origin.jpg"
        ]);
});

test("article/essay/37963/372009/photo-gallery/index.html?p=1", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://lp.p.pia.jp/article/essay/37963/372009/photo-gallery/index.html?p=1",
            "lp.p.pia.jp-article-essay-37963-372009-photo-gallery-index.html/",
            [
                    "https://lp.p.pia.jp/shared/materials/230e31ff-9a2c-4e1b-93b7-2fd24d4b78f2/origin.jpg",
                    "https://lp.p.pia.jp/shared/materials/c1b52fdc-0e14-46a6-9568-a9d07e72d6eb/origin.jpg",
                    "https://lp.p.pia.jp/shared/materials/78b03204-5872-456f-9c16-65f0943e14f2/origin.png",
                    "https://lp.p.pia.jp/shared/materials/092b7623-12c4-4352-ad92-74fd66332d36/origin.jpg",
                    "https://lp.p.pia.jp/shared/materials/836bba58-aab5-4552-a25c-a3d1edcab3d0/origin.jpg",
                    "https://lp.p.pia.jp/shared/materials/038cc434-3645-4a7b-aef9-1c7b5f46a6e2/origin.jpg"
            ]);
});
