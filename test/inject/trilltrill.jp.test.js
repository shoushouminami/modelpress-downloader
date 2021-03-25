const {testDirectDownload, getBrowserFactory} = require("./testbase");
const getBrowser = getBrowserFactory(beforeAll, afterAll);

test("Test fashion page", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://trilltrill.jp/articles/1838700",
        "trilltrill.jp-articles-1838700/",
        [
                "https://lh3.googleusercontent.com/eWojj1XRLRZOi8pw6oAy4D9Qxf9uzfZrlIJDeE5kHpA8k9MCTh8FkvObPXvDiUiQGJv7Mk-qwkW9-uf6YBFkZrLA2Pe431u6TDxp",
                "https://lh3.googleusercontent.com/GJQlbBs3IvByo-YB4JEA2Z73BjePs7lF2jMtfUzIB3U96naypKRWW9IGLprVB3WkYkEapQVihKffio6gFj82nh1-3Cu4antQ-Tpf0Q",
                "https://lh3.googleusercontent.com/nzzaVXRy-Q5CX0vEBIxYsuQwMxn_KSlehZTivdIGTsuHpKk7Jx0dxdVWlOhjqpms8Zc7z_7U53VuGyh8drZdZwriF4dujCe1Z9Ws_w",
                "https://lh3.googleusercontent.com/HL_bBTSWbjp05vzUX5TVUTmbL9AP_8zGYtFpk8udh8lLYoCnuyFJ_oq52PsuaNCa2bjKn2H3N66rY_ReO_ZdxkbDRw27sZXvYDr0Xg",
                "https://lh3.googleusercontent.com/GJSLZjgRf485nJESfyIYtxkffbTtp9p8BtJrbqSOtLGP7C5_ccpc-yWcbwsMFgls-VhTsB2_yBNx3QrsJkybD28HDe8IV7pRH1oB3A",
                "https://lh3.googleusercontent.com/Rw_0JaR1XZJV_2bN1KJZHz4V_7tvY61_i_-RP7AFSrnkVN5Mq_9R1TrfrQzaR7jzb5PCrgUnB9TgvZAicwJlGJdr8pVDFMhqF3wF",
                "https://lh3.googleusercontent.com/2ydtCOnkfvQLPpHBiRCzjI5S6Pnk7fK8YEwXpg-jd92bY61qU3pJ-1Qop0il7hPns9OsNr8snqkVRaN57y4goHuFEr0EkSyG9SuG_A",
                "https://lh3.googleusercontent.com/BtLVm-aiKvyegbqnO9K7vnSkgXryhz3eYmUK1kDxx_8kOwndt6tSOWuDnG81ZyBHBwQ6skU2D7Wmwgjtf8XvNtxr28LDa5kgOik",
                "https://lh3.googleusercontent.com/dPb4yRKQOtZaJGGkT7Ngh9XXv2hVkOvrsJt56Sp7x0mPyLSlbkjwefQmTkrdjuYBDboQJUcVrrQDA_V1vTIMeVKLD7FVbvybKqfzkw",
                "https://lh3.googleusercontent.com/cVjYSsFbNG0ywT-VBg-HlOLT866Iku_Yq9H2WiZKQbPvxCPfxL5JFuLG0eKaPD2d0Tsl1OQYB83UYdlyeGwAYa_aewz5sthGjxuY",
                "https://lh3.googleusercontent.com/zR4OQnLal57CfjsMu4x0GnzvajqdAinJ6JmVdXhEpclVauCej8YwPDG5oBm1C4Xb1IauDxbHDTxtSo3iSi-i0tiFBOXww38H-rg",
                "https://lh3.googleusercontent.com/QAhBnsePFiqjYmkTcu7Ksdw7A-Fnu8P1RcQK82fJ-1zk1z3tyT7tPWV1pRm1MO0VI-MvP6iOnBsbHSltcnzRGPi4vb5ChedXsJdBIw",
                "https://lh3.googleusercontent.com/Ix7tBKYVfw2jTyoqy2r7xkyv1jID3CaIU_sC1ww31eO3i304VnPYsC0RHdot2Fv5N1xqMazcAWULcAO5iaijmC_4JppF3q2HkbJFCQ",
                "https://lh3.googleusercontent.com/UpwBMtgMMfzTMmaZ4QiJvbt4b2_2HHl3K4SVLGKxkel9dD8jxGw5xyulED0AI_eIk2NqodBsXQpOlBjxukGys67zTOUZHqKrc2mcVQ",
                "https://lh3.googleusercontent.com/_g_-0w5nC7iR04e6Gh4IQS62U8UFuuNCySgAkYo8RqVSx2QWQjhs9B9lf3E4XRWf4SSiYaNj57bml09VFoAWXJYVDSgyflBzz60"
        ]
    );
});
