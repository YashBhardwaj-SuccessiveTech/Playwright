const {test, expect} = require("@playwright/test");

test("handle multiple tabs" , async function({browser}){

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://freelance-learn-automation.vercel.app/login");
    await page.waitForTimeout(3000);

    // await page.locator("(//*[name()='svg'])[3]").click();


    const [newPage] = await Promise.all([
        context.waitForEvent("page"),
        page.locator("(//*[name()='svg'])[4]").click(),
    ])

    const [secondPage] = await Promise.all([
        context.waitForEvent('page'),
        page.locator("(//a[contains(@href,'linkedin')])[1]").click()
    ])


    // first opened tab
    await newPage.locator("(//input[@name='email'])[2]").fill("yashbhardwaj1255@gmail.com");
    await newPage.waitForTimeout(3000);

    // original tab
    await page.locator("//input[@placeholder='Enter Email']").fill("yashbhardwaj1255@gmail.com");
    console.log("entered on first page")
    await page.waitForTimeout(3000);

    // second open tab
    // await secondPage.locator("//input[@name='email-or-phone']").fill("common yash");


    const allpages = context.pages();
    console.log(allpages.length);

    await newPage.close();
    await page.waitForTimeout(3000);
    await secondPage.close();
    await page.waitForTimeout(3000);


})

