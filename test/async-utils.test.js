const {wait, every} = require("../src/utils/async-utils");

test("Test waited", async (resolve) => {
    let count = 0;
    wait(500).then(() => {
        count++;
    });

    setTimeout(() => {
        try {
            expect(count).toBe(1);
        } finally {
            resolve();
        }
    }, 1000);
});

test("Test wait too short", async (resolve) => {
    let count = 0;
    wait(500).then(() => {
        count++;
    });

    setTimeout(() => {
        try {
            expect(count).toBe(0);
        } finally {
            resolve();
        }
    }, 100);
});

test("Test every", async (resolve) => {
    let count = 0;
    every(200).then((c) => {
        count++
        if (c === 2) {
            return true;
        }
    });

    setTimeout(() => {
        try {
            expect(count).toBe(2);
        } finally {
            resolve();
        }
    }, 1000)
});
