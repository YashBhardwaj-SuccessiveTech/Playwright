const {test, expect} = require("@playwright/test");

test("Handling auto suggestions using keyboard", async function({page}) {

    await page.goto("https://www.google.com/");
    await page.locator("textarea[name='q']").focus();

    await page.keyboard.type("Yash Bhardwaj");

    await page.waitForSelector("//li[@role='presentation']");

    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("ArrowDown");
    await page.keyboard.press("Enter");

});


// second approach to do this 

test("Handling auto suggestions using loop", async function({page}) {

    await page.goto("https://www.google.com/");
    await page.locator("textarea[name='q']").focus();

    await page.keyboard.type("Yash Bhardwaj");

    await page.waitForSelector("//li[@role='presentation']");

    const findstatus = false;

    const elements = await page.$$("//li[@role='presentation']");
    for(let i=0;i<elements.length;i++){
        const text = elements[i].textContent();
        // or if(text.includes("github")){
        // await elements[i].click();
        // }
        if(text=="yash bhardwaj github"){
            await page.keyboard.press("Enter");
            findstatus = true;
            break;
        }
    }

    await expect(findstatus).toBeTruthy();

});

