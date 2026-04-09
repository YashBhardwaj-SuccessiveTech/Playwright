const {test, expect} = require("@playwright/test");

test("mouse hover test", async function({page}){

    page.goto("https://freelance-learn-automation.vercel.app/login");
    await page.getByPlaceholder("Enter Email").type("admin@gmail.com",{delay:100});
    await page.locator("//input[@id='password1']").type("admin123",{delay:100});
    // await page.locator("//button[@type='submit']").click();
    // or
    await page.getByRole("button", {name:"Sign in"}).click();
    await page.locator("//span[text()='Manage']").hover();
    await page.locator("//a[normalize-space()='Manage Courses']").click();

})