const {test, expect} = require("@playwright/test");

test("my first test", async function({page}){
    expect(12).toBe(12);
});

test("my second test", async function({page}){
    expect(13).toBe(13);
});

test.skip("my third test", async function({page}){
    expect("Shivali Gautam").toContain("Shivali");
});

test("my fourth test", async function({page}){
    expect(false).toBeFalsy;
});

test("my fifth test", async function({page}){
    expect("yash bhardwaj".includes("yash")).toBeTruthy();
});

