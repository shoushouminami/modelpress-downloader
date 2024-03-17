const {testDirectDownload, getBrowserFactory, dummyItems} = require("./testbase");

let getBrowser = getBrowserFactory(beforeAll, afterAll);

test("2020/11/saito-asuka-friday-20201204-20201204.html", async () => {
    await testDirectDownload(
        getBrowser(),
        "https://idol.gravureprincess.date/2020/11/saito-asuka-friday-20201204-20201204.html",
        "idol.gravureprincess.date-2020-11-saito-asuka-friday-20201204-20201204.html/",
        [
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhuJxcELawLMRmCPVNSMlxDexVHdE2YsmGSjrVrEvmLOitrP_CwF_FXV4m2TgC9c1VRhJmOJEuBdmSV8O0lFye_-2Y5qEd_m2RdYlqly93IWbQ1z4eQ1DG76k41ZbwS8JOCg97sqZHk0I8/s0/000.jpg",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjvpe_6aB5efYiPIXaXX1g7nlvmGNdj5RwgsPd4YDXAew7o1MOOimSn_iW7QTYvCz60VOUumJFLnHP-uoqNIN1F_UD8JcgAz-BVT-8HRBeIfP7Hme5-ZNUI5cw6B3JJAIXStEbaumiYNps/s0/%25E9%25BD%258B%25E8%2597%25A4%25E9%25A3%259B%25E9%25B3%25A5+%25281%2529.jpg",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjS2nfMSRbaBU-PZAWI1AsmajrnGdRSCAuUB2DOp5C5RWlJrixMyi_GKUZEhBlH-SGH8FPxpMvnF0KAECX3SAuMsCQ3KcsQ5Nb85Ir9R9wCnYVUgLKQUtVIKYVWwC0HdP600ZBxED7Sz80/s0/%25E9%25BD%258B%25E8%2597%25A4%25E9%25A3%259B%25E9%25B3%25A5+%25282%2529.jpg",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhhNSP5x0ap3p741Pc7-OMlw5NPct5pDNwBvZFT8Cq5rsgb-2DSsVnwRY4Yoe_U5Xm0Q0sK83GF22OuRg9lf6IbdxSVSJdVCFayXqwN-H4ksQVVzBSeUmHB-jocik57LMHLY5s5KOIzOCc/s0/%25E9%25BD%258B%25E8%2597%25A4%25E9%25A3%259B%25E9%25B3%25A5+%25283%2529.jpg",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiK9DZt17U1FftYl2Qk7yIClkGpypy1DenxM1HdOUpYgj-EFKAGFrxJeNP1gvlN0lmycOH5tA-qZwLYNGNVYlMMequB0WjXSFPKIayO1lPver-QEiCCl64AwbZg0_homkbQWBjwMiwy-yU/s0/%25E9%25BD%258B%25E8%2597%25A4%25E9%25A3%259B%25E9%25B3%25A5+%25284%2529.jpg",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0tfrDYbEUrqldpvuZoSF8KLgWeEYRMCbMEKJCq7p17V3b6BFxiCODEBJZ6-LDz8r7m0ZwD8N6TfmZ_-pxI32l0mw28k8DdJW5xXV86spb_e8WgY3gVZxlhBARcKRLTZvOwBWoL2refqs/s0/%25E9%25BD%258B%25E8%2597%25A4%25E9%25A3%259B%25E9%25B3%25A5+%25285%2529.jpg",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgJ6Xbwa13qjI9zAJ-F5cOfBYxoaN6dC6u9VnWXTLWD1wyKCB1JGgywrjARjokLF5Vad6pzTUzW2zps0m2he-wVK4EnFYWIlBBUyjEXR0NRLmBVAKBGEAW3fEkIkXAI_7sUlri2S97NoCQ/s0/%25E9%25BD%258B%25E8%2597%25A4%25E9%25A3%259B%25E9%25B3%25A5+%25286%2529.jpg",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh3MH_mpifQ742PeJhTQKWfS8zaMENs9hMfhN-2mfaCFTD7sUhWwcvXg0X27adZ53j81WoyzQvxs3bLa2Ll6EMScBtSWwiTErePW2HRaK6hOrVlwcCPXPVD3U0nsofFIUuIYd-CyZ4i0n0/s0/%25E9%25BD%258B%25E8%2597%25A4%25E9%25A3%259B%25E9%25B3%25A5+%25287%2529.jpg",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiY0Di9vK5f43-jyBq-c9Kp0EP47bc5G0mnfO8VRHvHCllBQkBHFUX90UAY-FOPiLB7WvY0MBElwOABdrFaEqtdd61yaTlT-vE4Y8WQH39Pk4oSUNKMyUt-5elcuHrRddX_-6D0t67liak/s0/%25E9%25BD%258B%25E8%2597%25A4%25E9%25A3%259B%25E9%25B3%25A5+%25288%2529.jpg",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQmFI8TzW7qdlxvpwtIIlR3y1WplzmpFrc3KhAFBRYmARHWCthWCP7ydBNBWINBXSo9QcLSEsRCLPpnynRBpBV8JgziUS0K9rBSjjAgxDjVlPKFNFpvq4qI7V4A6xDa19CQH9QKz1acBo/s0/%25E9%25BD%258B%25E8%2597%25A4%25E9%25A3%259B%25E9%25B3%25A5+%25289%2529.jpg",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhoVL7WjNQ3tsM5o5fnwbXDlRP-KyUNKOjBwWSeNtHV2i6VMJBcTNNEgS0chd5T8VW7fRysqbubebRssrzYl1KS7HBnxpod_gIWmZh5I4TfgL1_xBsfMYrBmYM_SD7vXGLNzWKvrQ3Xc0k/s0/%25E9%25BD%258B%25E8%2597%25A4%25E9%25A3%259B%25E9%25B3%25A5+%252810%2529.jpg",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhCSzzTqKYboDHpI0Iddgh0Oi0FEkcIxJthK6dp9VaQr08PVYGk0S7M_nKIJE2h-ehhH33L0aMQUjO003DqL2TtpFjHsnxvSXDMx-5bLeXK1A_Dbwh1DT3RH3HOGEuoH7m10r79Wbg-peM/s0/%25E9%25BD%258B%25E8%2597%25A4%25E9%25A3%259B%25E9%25B3%25A5+%252811%2529.jpg",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQ4kQ6pGlQJcVSKfOfXBC6OJiqXL46ABDWP7yhqzE4c6-0gw6kLrjujrsE2r4vkLZtlqGLHCZX_RqiVnbwUpPQ_VBjdF-wU4DGP79RtIHSCxmRrjDqqq93Iqbp4ntbl2OI9H1Kt1-UNyw/s0/%25E9%25BD%258B%25E8%2597%25A4%25E9%25A3%259B%25E9%25B3%25A5+%252812%2529.jpg"
        ]);
});
