const {test, expect} = require("@playwright/test");

test("verify application title", async function({page}){
    await page.goto("https://google.com");
    const url = page.url();
    const title = await page.title()
    console.log(`url of this page is ${url}`);
    console.log(`Title of this page is ${title}`);

    await expect(page).toHaveTitle("Google");

});

