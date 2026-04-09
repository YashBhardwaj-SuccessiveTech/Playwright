const {test, expect} = require("@playwright/test");

test.use({viewport:{width:1300, height:1000}});

test("verify login", async function({page}){

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // to get the current view port length
    console.log("height of the viewport is ",await page.viewportSize().height);
    console.log("width of the viewport is ",await page.viewportSize().width);

    await page.getByPlaceholder("Username").type("Admin", {delay:200});
    
    await page.locator("input[name='password']").type("admin123", {delay:200});

    await page.locator("//button[@type='submit']").click();

    // await page.waitForTimeout(4000); // it is only used for debugging purpose and should never use in production

    await expect(page).toHaveURL(/dashboard/);

    await page.getByAltText("profile picture").click();

    await page.getByText("Logout").click();

    // await page.waitForTimeout(4000);

    await expect(page).toHaveURL(/login/);


});

