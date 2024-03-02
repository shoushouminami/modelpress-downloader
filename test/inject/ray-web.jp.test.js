const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("54526?page=1", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://ray-web.jp/54526?page=1",
        "ray-web.jp-54526/",
        [
            "https://cdn.ray-web.jp/images/98/03/67/65/jpg/zbg2jzvsj2ebj5bahm4voikqpryiyi.webp",
            "https://cdn.ray-web.jp/images/92/45/71/26/jpg/m5kfywqgkgun7ygp7vrs7xodloo7pd.webp",
            "https://cdn.ray-web.jp/images/27/20/68/22/jpg/lttzbnbgwyacaw8lunz9bzq3vf8kjx.webp",
            "https://cdn.ray-web.jp/images/50/32/44/56/jpg/twns3aaxf4bdedihtgwfnkyzs4a8vx.webp"
        ]);
});

test("54526", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://ray-web.jp/54526",
        "ray-web.jp-54526/",
        [
            "https://cdn.ray-web.jp/images/98/03/67/65/jpg/zbg2jzvsj2ebj5bahm4voikqpryiyi.webp",
            "https://cdn.ray-web.jp/images/92/45/71/26/jpg/m5kfywqgkgun7ygp7vrs7xodloo7pd.webp",
            "https://cdn.ray-web.jp/images/27/20/68/22/jpg/lttzbnbgwyacaw8lunz9bzq3vf8kjx.webp",
            "https://cdn.ray-web.jp/images/50/32/44/56/jpg/twns3aaxf4bdedihtgwfnkyzs4a8vx.webp"
        ]);
});

test("56094?page=1", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://ray-web.jp/56094?page=1",
        "ray-web.jp-56094/",
        [
            "https://cdn.ray-web.jp/images/45/28/04/13/jpg/sdgebx5tbubmqfbpvvaijiwsrpknex.webp",
            "https://cdn.ray-web.jp/images/04/47/29/12/jpg/ultozj3jm962a0zvzqrfimskvjkpng.webp",
            "https://cdn.ray-web.jp/images/96/04/06/98/jpg/v8wlwd4uvhxeh1fzxjxorrjynl1pio.webp",
            "https://cdn.ray-web.jp/images/37/04/42/51/jpg/lc9k18ahvz95t8sq89ju6v0jhxgu78.webp",
            "https://cdn.ray-web.jp/images/40/26/23/73/jpg/hxb2jpkuq9lrx7gduwrw3algk7zqec.webp",
            "https://cdn.ray-web.jp/images/32/04/68/87/jpg/tnrwwxs9b8vazifmsaaeguptl6fgps.webp",
            "https://cdn.ray-web.jp/images/25/87/34/89/jpg/z2wtcjxoeav3q3o3akhri0hhbcze3z.webp",
            "https://cdn.ray-web.jp/images/20/56/01/71/jpg/vynpnejn9yx4tvmgppiiphwe7wb7zv.webp",
            "https://cdn.ray-web.jp/images/66/17/73/49/jpg/ruvabebjwmalnyo8j0gnqgzihubnnh.webp"
        ]);
});

test("142819", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://ray-web.jp/142819",
        "ray-web.jp-142819/",
        [
            "https://cdn.ray-web.jp/images/78/58/46/64/jpg/acetsonqzctnlwwacdwows027trbcl.webp",
            "https://cdn.ray-web.jp/images/34/49/17/95/jpg/sgryuv1miisytqlsu5nxciktlu4oje.webp",
            "https://cdn.ray-web.jp/images/99/23/18/49/jpg/qmwununvpxfv2aswzzslhum5bh8tlf.webp",
            "https://cdn.ray-web.jp/images/65/84/13/83/jpg/vv2ethnj5e4tbrbooz3chcdaibxm7e.webp",
            "https://cdn.ray-web.jp/images/11/45/64/68/jpg/uk8ofhtusdgvxpm9devezpap1nf5wj.webp",
            "https://cdn.ray-web.jp/images/88/23/94/50/jpg/sb14fmd1nhwc32zjuxvot4epolxrp1.webp",
            "https://cdn.ray-web.jp/images/78/23/42/08/jpg/bqkpcce52x3q4pyeutxkkgklffkwp6.webp"
        ]);
});
