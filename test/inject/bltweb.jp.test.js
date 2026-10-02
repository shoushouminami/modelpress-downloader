const {testDirectDownload, getBrowserFactory} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);

describe("Test suite bltweb.jp", () => {

    test("2026/09/19/blt2611_cover/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://bltweb.jp/2026/09/19/blt2611_cover/",
            "bltweb.jp-2026-09-19-blt2611_cover-/",
            [
                "https://bltweb.jp/wp/wp-content/uploads/2026/09/947b51a7fbc50d1e215e7f6951269507.jpg",
                "https://bltweb.jp/wp/wp-content/uploads/2026/09/onmm_0403.jpg",
                "https://bltweb.jp/wp/wp-content/uploads/2026/09/ono_2.jpg",
                "https://bltweb.jp/wp/wp-content/uploads/2026/09/ono_3.jpg",
                "https://bltweb.jp/wp/wp-content/uploads/2026/09/ono_4.jpg",
                "https://bltweb.jp/wp/wp-content/uploads/2026/09/tsurusaki_1.jpg",
                "https://bltweb.jp/wp/wp-content/uploads/2026/09/tsurusaki_2.jpg",
                "https://bltweb.jp/wp/wp-content/uploads/2026/09/3f2d8c11d85ae0a9915c7acd30f5ad77.jpg",
                "https://bltweb.jp/wp/wp-content/uploads/2026/09/a13499f9aa5873dfd597d115c6fd8166.jpg",
                "https://bltweb.jp/wp/wp-content/uploads/2026/09/makino_1.jpg",
                "https://bltweb.jp/wp/wp-content/uploads/2026/09/makino_2.jpg",
                "https://bltweb.jp/wp/wp-content/uploads/2026/09/5a49a02ebaac15897917fd10cb210a7b.jpg",
                "https://bltweb.jp/wp/wp-content/uploads/2026/09/0177c95d6fc09f6fce497fbb7a015ed7.jpg",
                "https://bltweb.jp/wp/wp-content/uploads/2026/09/fcfa882544d53a785687016c2434cec2.jpg",
                "https://bltweb.jp/wp/wp-content/uploads/2026/09/4fd1c4947fbd0d70c65075f1159e79a5.jpg",
                "https://bltweb.jp/wp/wp-content/uploads/2026/09/2dc32fca986fde135021dd7b8f141458.jpg",
                "https://bltweb.jp/wp/wp-content/uploads/2026/09/274e4d2e284bf0d9d77f8810aa4d1fb5.jpg",
                "https://bltweb.jp/wp/wp-content/uploads/2026/09/771f0f18f9ea9f320b48db43fd2a8177.jpg",
                "https://bltweb.jp/wp/wp-content/uploads/2026/09/2db5faf72cf3000aee2b6e1909c1657b.jpg",
                "https://bltweb.jp/wp/wp-content/uploads/2026/09/ee89baa4fae7fdc5989307a1dc4da4f4.jpg",
                "https://bltweb.jp/wp/wp-content/uploads/2026/09/ea930be4df45fc00b1b55caec10cffc7.jpg"
            ]);
    });

    test("2026/09/16/b-l-t-2611_release/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://bltweb.jp/2026/09/16/b-l-t-2611_release/",
            "bltweb.jp-2026-09-16-b-l-t-2611_release-/",
            [
                "https://bltweb.jp/wp/wp-content/uploads/2026/09/ono_1-1.jpg",
                "https://bltweb.jp/wp/wp-content/uploads/2026/09/ono_2.jpg",
                "https://bltweb.jp/wp/wp-content/uploads/2026/09/ono_3.jpg",
                "https://bltweb.jp/wp/wp-content/uploads/2026/09/ono_4.jpg",
                "https://bltweb.jp/wp/wp-content/uploads/2026/09/tsurusaki_1.jpg",
                "https://bltweb.jp/wp/wp-content/uploads/2026/09/tsurusaki_2.jpg",
                "https://bltweb.jp/wp/wp-content/uploads/2026/09/5a49a02ebaac15897917fd10cb210a7b.jpg",
                "https://bltweb.jp/wp/wp-content/uploads/2026/09/0177c95d6fc09f6fce497fbb7a015ed7.jpg",
                "https://bltweb.jp/wp/wp-content/uploads/2026/09/fcfa882544d53a785687016c2434cec2.jpg",
                "https://bltweb.jp/wp/wp-content/uploads/2026/09/4fd1c4947fbd0d70c65075f1159e79a5.jpg",
                "https://bltweb.jp/wp/wp-content/uploads/2026/09/2dc32fca986fde135021dd7b8f141458.jpg",
                "https://bltweb.jp/wp/wp-content/uploads/2026/09/274e4d2e284bf0d9d77f8810aa4d1fb5.jpg",
                "https://bltweb.jp/wp/wp-content/uploads/2026/09/771f0f18f9ea9f320b48db43fd2a8177.jpg",
                "https://bltweb.jp/wp/wp-content/uploads/2026/09/2db5faf72cf3000aee2b6e1909c1657b.jpg",
                "https://bltweb.jp/wp/wp-content/uploads/2026/09/ee89baa4fae7fdc5989307a1dc4da4f4.jpg",
                "https://bltweb.jp/wp/wp-content/uploads/2026/09/ea930be4df45fc00b1b55caec10cffc7.jpg"
            ]);
    });

    test("2026/08/13/0813_summercandy_release/", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://bltweb.jp/2026/08/13/0813_summercandy_release/",
            "bltweb.jp-2026-08-13-0813_summercandy_release-/",
            [
                "https://bltweb.jp/wp/wp-content/uploads/2026/08/SC2026_H1-1.jpg",
                "https://bltweb.jp/wp/wp-content/uploads/2026/08/SC2026_H4.jpg",
                "https://bltweb.jp/wp/wp-content/uploads/2026/08/watanabe_1.jpg",
                "https://bltweb.jp/wp/wp-content/uploads/2026/08/watanabe_2.jpg",
                "https://bltweb.jp/wp/wp-content/uploads/2026/08/watanabe_3.jpg",
                "https://bltweb.jp/wp/wp-content/uploads/2026/08/kawabata_1.jpg",
                "https://bltweb.jp/wp/wp-content/uploads/2026/08/kawabata_2.jpg",
                "https://bltweb.jp/wp/wp-content/uploads/2026/08/yamada_1.jpg",
                "https://bltweb.jp/wp/wp-content/uploads/2026/08/yamada_2.jpg",
                "https://bltweb.jp/wp/wp-content/uploads/2026/08/sakai_1.jpg",
                "https://bltweb.jp/wp/wp-content/uploads/2026/08/sakai_2.jpg",
                "https://bltweb.jp/wp/wp-content/uploads/2026/08/be35146938634ea35d92f89628572ad7.jpg",
                "https://bltweb.jp/wp/wp-content/uploads/2026/08/goto_1.jpg",
                "https://bltweb.jp/wp/wp-content/uploads/2026/08/goto_2.jpg",
                "https://bltweb.jp/wp/wp-content/uploads/2026/08/f5deab5790b99e5034cbbf7bc645e0cc.jpg",
                "https://prcdn.freetls.fastly.net/release_image/6568/3494/6568-3494-14e31422e91fd1ac37e252b7ae672a65-1000x1480.jpg",
                "https://prcdn.freetls.fastly.net/release_image/6568/3494/6568-3494-1f76dc0c2428d5b23e9fd52e7fe18f0a-1000x1480.jpg",
                "https://prcdn.freetls.fastly.net/release_image/6568/3494/6568-3494-b6a020bd2a5aa50c73a3355497424f0b-1000x1480.jpg",
                "https://prcdn.freetls.fastly.net/release_image/6568/3494/6568-3494-c8aa4b7a12ce01045dc3d1c6edf76e20-1000x1480.jpg",
                "https://prcdn.freetls.fastly.net/release_image/6568/3494/6568-3494-e914c14126e169f43bfcc8842fdc6ea1-1000x1480.jpg",
                "https://prcdn.freetls.fastly.net/release_image/6568/3494/6568-3494-058778b2c15a4bcc60e8b1110c7df4eb-1000x1480.jpg",
                "https://prcdn.freetls.fastly.net/release_image/6568/3494/6568-3494-0304f4d720bf73ad53d440fb096d7d1b-1000x1480.jpg",
                "https://prcdn.freetls.fastly.net/release_image/6568/3494/6568-3494-281e3218c3be97949ab781f3630c1675-1000x1480.jpg",
                "https://prcdn.freetls.fastly.net/release_image/6568/3494/6568-3494-3c4bf5e8bd1716eceacdea04e1404bc9-1000x1480.jpg"
            ]);
    });



})
