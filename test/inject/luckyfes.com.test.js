const {testDirectDownload, getBrowserFactory} = require("./testbase");
let getBrowser =  getBrowserFactory(beforeAll, afterAll);

describe("Test suite luckyfes.com", () => {
    test("en/quick-report/40", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://luckyfes.com/en/quick-report/40",
            "luckyfes.com-【SetList - Live Photos】FRUITS ZIPPER/",
            [
                "https://storage.fespli.dev/luckyfes2026/z8hvevgj7gxoefjiwn583hobtu2h",
                "https://storage.fespli.dev/luckyfes2026/ymfpvjk2bj51n7clfcvxgmgezo23",
                "https://storage.fespli.dev/luckyfes2026/oks35lzgvmzysgg5spegtjj5ixre",
                "https://storage.fespli.dev/luckyfes2026/du1howbz90kyveya383l91o2s6hx",
                "https://storage.fespli.dev/luckyfes2026/3wqirk34cy18lsf1xshmdf3cofxe",
                "https://storage.fespli.dev/luckyfes2026/sqt766k2jlzetpsqy7lkwwnmeb5p",
                "https://storage.fespli.dev/luckyfes2026/3e8r3m70im0294zhhqscqgr0zlg7",
                "https://storage.fespli.dev/luckyfes2026/ey8ugwn7m46p1taudh495uj3gcet",
                "https://storage.fespli.dev/luckyfes2026/0y6fraovda9eg2pmxt32twq22xgm",
                "https://storage.fespli.dev/luckyfes2026/2hk5x052ax2a2n6qj0jzbyvg4hec",
                "https://storage.fespli.dev/luckyfes2026/hyvdvlfxvc1d3y8775ohwv3mcuy0",
                "https://storage.fespli.dev/luckyfes2026/n9z4nxvhz89pnp6bknbfrs527249"
            ]);
    });


    test("en/quick-report/60", async () => {
        await testDirectDownload(
            getBrowser(),
            "https://luckyfes.com/en/quick-report/60",
            "luckyfes.com-【SetList - Live Photos】SWEET STEADY/",
            [
                "https://storage.fespli.dev/luckyfes2026/4xzr4eb5744tdocfin7hwpg8q9mk",
                "https://storage.fespli.dev/luckyfes2026/r2fshv5yulhfyx7ajd91viq6953k",
                "https://storage.fespli.dev/luckyfes2026/ynf5lrym06ort5h4rbz2i1tarzn6",
                "https://storage.fespli.dev/luckyfes2026/q0hy0uawgk7x8y3dbaiuim0zq1mk",
                "https://storage.fespli.dev/luckyfes2026/h2kqm9rwrkge590gwrldjztyepbj",
                "https://storage.fespli.dev/luckyfes2026/9ixvk90480ou87klse18h6se7sff",
                "https://storage.fespli.dev/luckyfes2026/nu0pc8r3cflzmpgkdqfcafrt8uz4",
                "https://storage.fespli.dev/luckyfes2026/ltoh5n7h693tp4dzvvz8b98qfw9j",
                "https://storage.fespli.dev/luckyfes2026/mfu8pjet0zotcnnht11lajnmfm1j",
                "https://storage.fespli.dev/luckyfes2026/84h0zh4oan82sgmodbinym8zu31o"
            ]);
    });
})
