const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

describe("Test suite www.nylon.jp", () => {
    // "portfolio"/campaign style pages use the classic WordPress .entry-content, with small
    // decorative icons (instagram/sns badges) interspersed - filtered out by rendered width
    test("niziu_portfolio", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.nylon.jp/niziu_portfolio",
            "www.nylon.jp-niziu_portfolio/",
            [
                "https://storage.googleapis.com/nylonjapan/2026/07a/LOOKINTOOURPIECES/hY4eOTvWYRk2/PC/KV.jpg",
                "https://storage.googleapis.com/nylonjapan/2026/07a/LOOKINTOOURPIECES/hY4eOTvWYRk2/PC/260618%20NYLON%200415%402x.jpg",
                "https://storage.googleapis.com/nylonjapan/2026/07a/LOOKINTOOURPIECES/hY4eOTvWYRk2/PC/%E3%80%906.30%E3%80%91NiziU%20Pre-Debut%20Digital%20Mini%20AL%E3%80%8EMake%20you%20happy%E3%80%8FJK%E5%86%99%402x.jpg",
                "https://storage.googleapis.com/nylonjapan/2026/07a/LOOKINTOOURPIECES/hY4eOTvWYRk2/PC/260618%20NYLON%200432%402x.jpg",
                "https://storage.googleapis.com/nylonjapan/2026/07a/LOOKINTOOURPIECES/hY4eOTvWYRk2/PC/%E3%82%AF%E3%82%99%E3%83%AB%E3%83%BC%E3%83%95%E3%82%9A%203726.png",
                "https://storage.googleapis.com/nylonjapan/2026/07a/LOOKINTOOURPIECES/hY4eOTvWYRk2/PC/260618%20NYLON%200356%402x.jpg",
                "https://storage.googleapis.com/nylonjapan/2026/07a/LOOKINTOOURPIECES/hY4eOTvWYRk2/PC/NiziU_3rd%20AL_New%20Emotion_JK_Tsujou%402x.jpg",
                "https://storage.googleapis.com/nylonjapan/2026/07a/LOOKINTOOURPIECES/hY4eOTvWYRk2/PC/260618%20NYLON%200280%402x.jpg",
                "https://storage.googleapis.com/nylonjapan/2026/07a/LOOKINTOOURPIECES/hY4eOTvWYRk2/PC/Memories%402x.jpg",
                "https://storage.googleapis.com/nylonjapan/2026/07a/LOOKINTOOURPIECES/hY4eOTvWYRk2/PC/260618%20NYLON%200624%402x.jpg",
                "https://storage.googleapis.com/nylonjapan/2026/07a/LOOKINTOOURPIECES/hY4eOTvWYRk2/PC/260618%20NYLON%200212%402x.jpg",
                "https://storage.googleapis.com/nylonjapan/2026/07a/LOOKINTOOURPIECES/hY4eOTvWYRk2/PC/NiziU%20Digital%20Single%20%E3%80%8CASOBO%E3%80%8D%20JK_3000px%402x.jpg",
                "https://storage.googleapis.com/nylonjapan/2026/07a/LOOKINTOOURPIECES/hY4eOTvWYRk2/PC/260618%20NYLON%200074%402x.jpg",
                "https://storage.googleapis.com/nylonjapan/2026/07a/LOOKINTOOURPIECES/hY4eOTvWYRk2/PC/NiziU%201st%20EP%E3%80%8ERISE%20UP%E3%80%8Ftsujo%20ban%20JK%402x.jpg",
                "https://storage.googleapis.com/nylonjapan/2026/07a/LOOKINTOOURPIECES/hY4eOTvWYRk2/PC/260618%20NYLON%200093%402x.jpg",
                "https://storage.googleapis.com/nylonjapan/2026/07a/LOOKINTOOURPIECES/hY4eOTvWYRk2/PC/NiziU_2nd_tujyoJK_s%402x.jpg",
                "https://storage.googleapis.com/nylonjapan/2026/07a/LOOKINTOOURPIECES/hY4eOTvWYRk2/PC/260618%20NYLON%200167%402x.jpg",
                "https://storage.googleapis.com/nylonjapan/2026/07a/LOOKINTOOURPIECES/hY4eOTvWYRk2/PC/NiziU_2nd%20EP_GGBNFY_JK_Tsujou%402x.jpg",
                "https://storage.googleapis.com/nylonjapan/2026/07a/LOOKINTOOURPIECES/hY4eOTvWYRk2/PC/260618%20NYLON%200674%402x.jpg",
                "https://storage.googleapis.com/nylonjapan/2026/07a/LOOKINTOOURPIECES/hY4eOTvWYRk2/PC/NiziU_Best%20Album_Portfolio_JK_Tsujou%402x.jpg"
            ]);
    });

    // sponsored "series" pages (eg COKOREA MANIA) use a hand-built #maincontent .contentbox
    // template instead of the classic WordPress content area
    test("cokorea519", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.nylon.jp/cokorea519",
            "www.nylon.jp-cokorea519/",
            [
                "https://www.nylon.jp/img/contents/cokorea/519/main.jpg",
                "https://www.nylon.jp/img/contents/cokorea/519/title.jpg",
                "https://www.nylon.jp/img/contents/cokorea/519/t1.jpg",
                "https://www.nylon.jp/img/contents/cokorea/519/1.jpg",
                "https://www.nylon.jp/img/contents/cokorea/519/t2.jpg",
                "https://www.nylon.jp/img/contents/cokorea/519/2.jpg",
                "https://www.nylon.jp/img/contents/cokorea/519/t3.jpg",
                "https://www.nylon.jp/img/contents/cokorea/519/3.jpg",
                "https://www.nylon.jp/img/contents/cokorea/519/t4.jpg",
                "https://www.nylon.jp/img/contents/cokorea/519/4.jpg",
                "https://www.nylon.jp/img/contents/cokorea/line.jpg"
            ]);
    });

    // plain "/fashion|beauty|culture/<id>.html" news briefs have an empty .entry-content (just
    // "<br><br>") but do have a photo gallery, rendered via a "fotorama" widget as a sibling of
    // <article> rather than inside the post content itself
    test("fashion/2942.html", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.nylon.jp/fashion/2942.html",
            "www.nylon.jp-fashion-2942.html/",
            [
                "https://www.nylon.jp/uploads/2026/07/c67096807ffcc02c4bce69b36c107b8b.jpg",
                "https://www.nylon.jp/uploads/2026/07/0968291a6dd118a738e7f102dbb8b879.jpg",
                "https://www.nylon.jp/uploads/2026/07/05b4f1c18ec30bf1fd4cb3cb0067c9fe.jpg",
                "https://www.nylon.jp/uploads/2026/07/9672fa92c8b2c65174025c17e1bc7276.jpg",
                "https://www.nylon.jp/uploads/2026/07/339dd7a4273d3bd965436f25a2ceeba3.jpg"
            ]);
    });

    // regression test: the fotorama gallery widget (movie stills) lives entirely outside
    // <article> - a sibling of it in the page template, not part of the post content
    test("culturecinema768", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.nylon.jp/culturecinema768",
            "www.nylon.jp-culturecinema768/",
            [
                "https://www.nylon.jp/uploads/2026/07/1d14b7795b83e70b3852f0fa57e58fa9.jpg",
                "https://www.nylon.jp/uploads/2026/07/59f4472fd2e4ba2647c6f12dd9fae9e8.jpg",
                "https://www.nylon.jp/uploads/2026/07/482021484acdda8484c8faa7f1ca0f30.jpg",
                "https://www.nylon.jp/uploads/2026/07/611024223fd8f705a677a1954a61a0d1.jpg",
                "https://www.nylon.jp/uploads/2026/07/2c0c8ec8f793d4e8c3cbbc656a29b553.jpg"
            ]);
    });

    test("culturecinema767", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.nylon.jp/culturecinema767",
            "www.nylon.jp-culturecinema767/",
            [
                "https://www.nylon.jp/uploads/2026/07/d43cbebac3e4a432c2a039ce88f389be.jpg",
                "https://www.nylon.jp/uploads/2026/07/e96d8d93c18571d810ffe48388db8bcd.jpg",
                "https://www.nylon.jp/uploads/2026/07/253160bff96310dc130aa248fb3fb304.jpg",
                "https://www.nylon.jp/uploads/2026/07/f5497581d53104763be9e07f92ffe473.jpg",
                "https://www.nylon.jp/uploads/2026/07/dff2b89d828e3cbce3d8660e84f0c3af.jpg"
            ]);
    });

    // downloadVideo defaults to off - this article has a <video> embed, but it must not be
    // included unless the user opts in via the site option
    test("usagionline (downloadVideo off by default)", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.nylon.jp/usagionline",
            "www.nylon.jp-usagionline/",
            [
                "https://storage.googleapis.com/nylonjapan/2026/04/USAGIONLINE/kV1FlPT3KX7uG5BFAStPqyNu9Wlc3QrO2lLGKcfC34/PC/1.png",
                "https://storage.googleapis.com/nylonjapan/2026/04/USAGIONLINE/kV1FlPT3KX7uG5BFAStPqyNu9Wlc3QrO2lLGKcfC34/movie.png",
                "https://storage.googleapis.com/nylonjapan/2026/04/USAGIONLINE/kV1FlPT3KX7uG5BFAStPqyNu9Wlc3QrO2lLGKcfC34/PC/3.png",
                "https://storage.googleapis.com/nylonjapan/2026/04/USAGIONLINE/kV1FlPT3KX7uG5BFAStPqyNu9Wlc3QrO2lLGKcfC34/PC/4.png",
                "https://storage.googleapis.com/nylonjapan/2026/04/USAGIONLINE/kV1FlPT3KX7uG5BFAStPqyNu9Wlc3QrO2lLGKcfC34/PC/5.png",
                "https://storage.googleapis.com/nylonjapan/2026/04/USAGIONLINE/kV1FlPT3KX7uG5BFAStPqyNu9Wlc3QrO2lLGKcfC34/PC/7.png",
                "https://storage.googleapis.com/nylonjapan/2026/04/USAGIONLINE/kV1FlPT3KX7uG5BFAStPqyNu9Wlc3QrO2lLGKcfC34/PC/6.png",
                "https://storage.googleapis.com/nylonjapan/2026/04/USAGIONLINE/kV1FlPT3KX7uG5BFAStPqyNu9Wlc3QrO2lLGKcfC34/PC/8.png",
                "https://storage.googleapis.com/nylonjapan/2026/04/USAGIONLINE/kV1FlPT3KX7uG5BFAStPqyNu9Wlc3QrO2lLGKcfC34/PC/9.png",
                "https://storage.googleapis.com/nylonjapan/2026/04/USAGIONLINE/kV1FlPT3KX7uG5BFAStPqyNu9Wlc3QrO2lLGKcfC34/PC/10.png"
            ]);
    });

    // some articles embed more than one video (eg one per person featured) - all of them should
    // be included when downloadVideo is on, not just the first
    test("uniqloteecultureclub_rbh (downloadVideo off by default, 3 videos on the page)", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.nylon.jp/uniqloteecultureclub_rbh",
            "www.nylon.jp-uniqloteecultureclub_rbh/",
            [
                "https://storage.googleapis.com/nylonjapan/2026/05/UNIQLO/rV3CsDqvR2unYgPweLYdw4HkZlts80tgWgoD8uIE/BOYjH2D7hrxU4RcUljdm12iibjDdVvygNp/PC/%E3%82%AF%E3%82%99%E3%83%AB%E3%83%BC%E3%83%95%E3%82%9A%204338.png",
                "https://storage.googleapis.com/nylonjapan/2026/05/UNIQLO/rV3CsDqvR2unYgPweLYdw4HkZlts80tgWgoD8uIE/BOYjH2D7hrxU4RcUljdm12iibjDdVvygNp/PC/%E3%82%AF%E3%82%99%E3%83%AB%E3%83%BC%E3%83%95%E3%82%9A%204334.png",
                "https://storage.googleapis.com/nylonjapan/2026/05/UNIQLO/rV3CsDqvR2unYgPweLYdw4HkZlts80tgWgoD8uIE/BOYjH2D7hrxU4RcUljdm12iibjDdVvygNp/PC/%E3%82%AF%E3%82%99%E3%83%AB%E3%83%BC%E3%83%95%E3%82%9A%204326.png",
                "https://storage.googleapis.com/nylonjapan/2026/05/UNIQLO/rV3CsDqvR2unYgPweLYdw4HkZlts80tgWgoD8uIE/BOYjH2D7hrxU4RcUljdm12iibjDdVvygNp/PC/%E3%82%AF%E3%82%99%E3%83%AB%E3%83%BC%E3%83%95%E3%82%9A%204336.png",
                "https://storage.googleapis.com/nylonjapan/2026/05/UNIQLO/rV3CsDqvR2unYgPweLYdw4HkZlts80tgWgoD8uIE/BOYjH2D7hrxU4RcUljdm12iibjDdVvygNp/PC/%E3%82%AF%E3%82%99%E3%83%AB%E3%83%BC%E3%83%95%E3%82%9A%204337.png",
                "https://storage.googleapis.com/nylonjapan/2026/05/UNIQLO/rV3CsDqvR2unYgPweLYdw4HkZlts80tgWgoD8uIE/BOYjH2D7hrxU4RcUljdm12iibjDdVvygNp/PC/%E3%82%AF%E3%82%99%E3%83%AB%E3%83%BC%E3%83%95%E3%82%9A%204335.png",
                "https://storage.googleapis.com/nylonjapan/2026/05/UNIQLO/rV3CsDqvR2unYgPweLYdw4HkZlts80tgWgoD8uIE/uB4xsbA6ax2ituOl9pdaCIKTKvnHtIRrAXqiilgRd/PC/%E3%82%AF%E3%82%99%E3%83%AB%E3%83%BC%E3%83%95%E3%82%9A%204203.png",
                "https://storage.googleapis.com/nylonjapan/2026/05/UNIQLO/rV3CsDqvR2unYgPweLYdw4HkZlts80tgWgoD8uIE/uB4xsbA6ax2ituOl9pdaCIKTKvnHtIRrAXqiilgRd/PC/%E3%82%AF%E3%82%99%E3%83%AB%E3%83%BC%E3%83%95%E3%82%9A%204205.png"
            ]);
    });

    // "product/goods campaign" style pages use a bare ".contentsBox" as the content container.
    // regression test: on #maincontent-style (cokorea) pages, ".contentsBox" is reused as a much
    // broader whole-page wrapper that also sweeps in an unrelated trailing writer profile/social
    // icon card - this pattern must only apply when #maincontent isn't present (see cokorea519
    // above, which must stay at its original count).
    test("starglow_goods", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.nylon.jp/starglow_goods",
            "www.nylon.jp-starglow_goods/",
            [
                "https://storage.googleapis.com/nylonjapan/2026/07a/goods07/7%E5%A3%B2STARGLOW_KV.jpg",
                "https://storage.googleapis.com/nylonjapan/2026/07a/goods07/%E5%8F%97%E6%B3%A8_PC.png",
                "https://storage.googleapis.com/nylonjapan/2026/07a/goods07/%E3%83%9B%E3%82%99%E3%82%BF%E3%83%B3.png",
                "https://storage.googleapis.com/nylonjapan/2026/07a/goods07/%E3%82%A2%E3%82%AF%E3%83%AA%E3%83%AB%E3%82%B9%E3%82%BF%E3%83%B3%E3%83%88%E3%82%99_%E5%85%A8%E4%BD%93.jpg",
                "https://storage.googleapis.com/nylonjapan/2026/07a/goods07/%E3%82%A2%E3%82%AF%E3%82%AD%E3%83%BC_%E5%85%A8%E4%BD%93.jpg",
                "https://storage.googleapis.com/nylonjapan/2026/07a/goods07/%E5%B7%BE%E7%9D%80_%E5%85%A8%E4%BD%93.jpg",
                "https://storage.googleapis.com/nylonjapan/2026/07a/goods07/%E3%82%AF%E3%82%99%E3%83%A9%E3%82%B9_%E5%85%A8%E4%BD%93.jpg",
                "https://storage.googleapis.com/nylonjapan/2026/07a/mM07KivLYQju/STARGLOW%E7%89%B9%E5%88%A5%E7%89%88%E8%A1%A8%E7%B4%991.jpg",
                "https://storage.googleapis.com/nylonjapan/2026/07a/mM07KivLYQju/STARGLOW%E7%89%B9%E5%88%A5%E7%89%88%E8%A1%A8%E7%B4%994.jpg"
            ]);
    });

    // regression test: the top hero image is a bare <img> with no wrapping content container at
    // all (a direct child of .npage), which none of the other selectors would ever match. Also
    // covers excluding the unrelated "buy the print magazine" front/back-cover promo widget
    // (table.magtble), which otherwise gets swept up by the .contentsBox selector.
    test("culturestudio/76", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.nylon.jp/culturestudio/76",
            "www.nylon.jp-culturestudio-76/",
            [
                "https://www.nylon.jp/uploads/2026/06/cabf162a9aa6a36eda2869b7f42cad9f.jpg",
                "https://www.nylon.jp/img/contents/2026_/6/day.jpg",
                "https://www.nylon.jp/img/contents/2026_/6/item1.jpg",
                "https://www.nylon.jp/img/contents/2026_/6/item2.jpg",
                "https://www.nylon.jp/img/contents/2026_/6/item3.jpg",
                "https://www.nylon.jp/img/contents/2026_/6/item4.jpg"
            ]);
    });

    // TODO: cover downloadVideo:true (video actually gets included, and all videos on a
    // multi-video page like uniqloteecultureclub_rbh get included, not just the first). Not
    // testable via testDirectDownload today: loadPerisistedSiteOptionsAndOnChange()'s
    // getSiteOptions round trip never resolves under test/mock/mock-chrome-api.js, which doesn't
    // reply to sendMessage. Manually verified correct with a custom responsive mock during
    // development; same underlying gap affects twitter.com.js's options-driven video logic too.
})
