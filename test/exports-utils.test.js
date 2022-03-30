
test("Test export", () => {
    let expMod = {};
    function myFunc() {}
    function myFunc2() {}
    function myFunc3() {}
    let exp = require("../src/utils/exports-utils")(expMod);
    exp(myFunc);
    expect(expMod["myFunc"]).toBe(myFunc);
    exp(myFunc, myFunc2, myFunc3);
    expect(expMod["myFunc"]).toBe(myFunc);
    expect(expMod["myFunc2"]).toBe(myFunc2);
    expect(expMod["myFunc3"]).toBe(myFunc3);
});
