const {test,expect} = require("@playwright/test");

test("verify file upload", async function({page}){
    await page.goto("https://the-internet.herokuapp.com/upload");

    await page.locator("#file-upload").setInputFiles("./Uploads/Screenshot from 2026-04-06 14-29-29.png");

    await page.locator("#file-submit").click();

    // await expect(page).toHaveURL(/upload/);
    // or 
    await expect(await page.locator("//h3")).toHaveText("File Uploaded!");

})

