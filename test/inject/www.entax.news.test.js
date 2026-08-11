const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

describe("Test suite www.entax.news", () => {
    test("interview/202608111700.html", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.entax.news/interview/202608111700.html",
            "www.entax.news-interview-202608111700.html/",
            [
                "https://www.entax.news/cms-data/images/interview/202608111700/i4u0canbk7uopqllr9hvubvhfeeofc.jpg",
                "https://www.entax.news/cms-data/images/interview/202608111700/2s2qerk1slalptbaba4ps4x1rv73fo.jpg",
                "https://www.entax.news/cms-data/images/interview/202608111700/4to1dj8y26zn1pwvdluftswxpexavf.jpg",
                "https://www.entax.news/cms-data/images/interview/202608111700/xplwxw499lb5whwue89hb4yi63yc9w.jpg",
                "https://www.entax.news/cms-data/images/interview/202608111700/hk129uh2sivnb2rgkb7zok3840x6uz.jpg",
                "https://www.entax.news/cms-data/images/interview/202608111700/weqzffdz2wxofy7r28sfzks3o830un.jpg",
                "https://www.entax.news/cms-data/images/interview/202608111700/1xhdcx5cjp15pnpnulmqwm6rqwybc8.jpg",
                "https://www.entax.news/cms-data/images/interview/202608111700/bkt9327gjfm4ygk73ctsfenui84zii.jpg",
                "https://www.entax.news/cms-data/images/interview/202608111700/i0uixw41ls1d9a4aqyc747pcwrj5pw.jpg",
                "https://www.entax.news/cms-data/images/interview/202608111700/dup16kd7jemekiih5y37s0n00gbn9f.jpg",
                "https://www.entax.news/cms-data/images/interview/202608111700/s1jeiop9sbb0t9ddvtzim2o9q65eil.jpg",
                "https://www.entax.news/cms-data/images/interview/202608111700/xmo9qparuk719l4sovjwu7p9dxm6q2.jpg"
            ]);
    });

    test("music/202401291700.html", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.entax.news/music/202401291700.html",
            "www.entax.news-music-202401291700.html/",
            [
                "https://www.entax.news/cms-data/images/music/202401291700/wpab6ok13t5xkdr3.jpg",
                "https://www.entax.news/cms-data/images/music/202401291700/er5aj66dftrxl6or.jpg",
                "https://www.entax.news/cms-data/images/music/202401291700/gharni9h2f71d72z.jpg",
                "https://www.entax.news/cms-data/images/music/202401291700/sa3qow9fk7grkp7b.jpg",
                "https://www.entax.news/cms-data/images/music/202401291700/ycq50pgnc5ju47t5.jpg"
            ]);
    });

    test("entertainment/202607311030.html", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://www.entax.news/entertainment/202607311030.html",
            "www.entax.news-entertainment-202607311030.html/",
            [
                "https://www.entax.news/cms-data/images/entertainment/202607311030/i0pozljt8e7rbm9ttqorb71bk668in.jpg",
                "https://www.entax.news/cms-data/images/entertainment/202607311030/b7edghym4vdrkqbz09528afititd31.jpg",
                "https://www.entax.news/cms-data/images/entertainment/202607311030/4m9nfn7ilbw5tbsgfy9lyicm45tyg9.jpg"
            ]);
    });
})


