const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser =  getBrowserFactory(beforeAll, afterAll);

test("p230917_hnea/", async () => {
        await testDirectDownload(
            getBrowser(),
            "http://www.cinema-life.net/p230917_hnea/",
            "www.cinema-life.net-p230917_hnea-/",
            [
                    "http://www.cinema-life.net/wp-content/uploads/bc30d4c4eda5a4336925785e5ebdb4a6.jpg",
                    "http://www.cinema-life.net/wp-content/uploads/590437df835647b34540e2856397ed99.jpg",
                    "http://www.cinema-life.net/wp-content/uploads/7bb0fcded509ee488b5cc37a32b7874c.jpg",
                    "http://www.cinema-life.net/wp-content/uploads/adc015a2478edb7713885ca08e6122b9.jpg",
                    "http://www.cinema-life.net/wp-content/uploads/9c76c499951bfb0def4a4c15272abf85.jpg",
                    "http://www.cinema-life.net/wp-content/uploads/e91bf6672eff63d0a611dacdb89716a9.jpg",
                    "http://www.cinema-life.net/wp-content/uploads/2c92dce8766a4087cb4a1b56401798c0.jpg"
            ]);
});

test("p230919_mhpr/", async () => {
        await testDirectDownload(
            getBrowser(),
            "http://www.cinema-life.net/p230919_mhpr/",
            "www.cinema-life.net-p230919_mhpr-/",
            [
                    "http://www.cinema-life.net/wp-content/uploads/773b2d11f2c2099d64b5b2ff085ec7a6.jpg"
            ]);
});

test("p230918_anea/", async () => {
    await testDirectDownload(
        getBrowser(),
        "http://www.cinema-life.net/p230918_anea/",
        "www.cinema-life.net-p230918_anea-/",
        [
            "http://www.cinema-life.net/wp-content/uploads/4c5887534644fe1456839f7d2f4a7798.jpg",
            "http://www.cinema-life.net/wp-content/uploads/5800b78cfa0a7b6d21557062fd2a2fd7.jpg",
            "http://www.cinema-life.net/wp-content/uploads/f6f92f27c62d94ad8e4a7f1e3c47f577.jpg",
            "http://www.cinema-life.net/wp-content/uploads/ab92c69332d37faa5fea4696bb19674e.jpg",
            "http://www.cinema-life.net/wp-content/uploads/6b5331add08dde4f0f6ea3d9af6499c6.jpg"
        ]);
});

test("p230918_jspr/", async () => {
    await testDirectDownload(
        getBrowser(),
        "http://www.cinema-life.net/p230918_jspr/",
        "www.cinema-life.net-p230918_jspr-/",
        [
            "http://www.cinema-life.net/wp-content/uploads/cc2f1d168ceb5c92da341b40611db06b.jpg",
            "http://www.cinema-life.net/wp-content/uploads/adc615e3f52ec8c61e760b251d99a308.jpg",
            "http://www.cinema-life.net/wp-content/uploads/4077af6612ea6e66e10805dea3383498.jpg",
            "http://www.cinema-life.net/wp-content/uploads/fd5a5a6e859d1c735bb2e6edfaf02fb3.jpg",
            "http://www.cinema-life.net/wp-content/uploads/d5314b2dabd16e402b1cbe4854e0d382.jpg",
            "http://www.cinema-life.net/wp-content/uploads/797ae0612cf9df2fdb6d957bc338b2e0.jpg",
            "http://www.cinema-life.net/wp-content/uploads/f3cdc1a0b7acf84ffd142ce903aabb8c.jpg",
            "http://www.cinema-life.net/wp-content/uploads/7db209c0ba0301dc33c3f19980666a46.jpg",
            "http://www.cinema-life.net/wp-content/uploads/5b9934f18a4325d463bb5f802d8bdd44.jpg",
            "http://www.cinema-life.net/wp-content/uploads/5b979c7bd10761e5e62c0f814f8870ed.jpg"
        ]);
});

test("interview/i2235/", async () => {
    await testDirectDownload(
        getBrowser(),
        "http://www.cinema-life.net/interview/i2235/",
        "www.cinema-life.net-interview-i2235-/",
        [
            "http://www.cinema-life.net/wp-content/uploads/baf49f4dba6c1043e33cad2cb4447438.jpg",
            "http://www.cinema-life.net/wp-content/uploads/5c68d3bc03909d2f4ff1024d6da6c2bf.jpg",
            "http://www.cinema-life.net/wp-content/uploads/f1ff14831b719d24b6d7e863a9f1dbf2.jpg",
            "http://www.cinema-life.net/wp-content/uploads/9e035d2c10e43354f8c415a7d142df78.jpg",
            "http://www.cinema-life.net/wp-content/uploads/2acd606e9afbb6c5d5d97d5d54c0b0de.jpg",
            "http://www.cinema-life.net/wp-content/uploads/7004424743bad0790c87aae9ff814946.jpg"
        ]);
});
