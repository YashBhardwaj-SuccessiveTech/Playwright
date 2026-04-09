const {test, expect} = require("@playwright/test");

test("Handling Alerts thorough Playwright" , async function({page}){
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    page.on('dialog', async(d)=>{
        expect(d.type()).toContain('alert');
        expect(d.message()).toContain('I am a JS Alert');
        await d.accept();
        console.log("alert aagya success");
    })
    await page.locator("button[onclick='jsAlert()']").click();

});

test("Handling confirm thorogh Playwright" , async function({page}){
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    page.on('dialog', async(dialogwindow)=>{
        expect(dialogwindow.type()).toContain('confirm');
        expect(dialogwindow.message()).toContain('I am a JS Confirm');
        // await dialogwindow.accept();
        await dialogwindow.dismiss();
        console.log("confirm aagya success");
    })
    await page.locator("button[onclick='jsConfirm()']").click();

});


test("Handling prompt thorogh Playwright" , async function({page}){
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    page.on('dialog', async(dialogwindow)=>{
        expect(dialogwindow.type()).toContain('prompt');
        expect(dialogwindow.message()).toContain('I am a JS prompt');
        await dialogwindow.accept("Yash Bhardwaj");
        // await dialogwindow.dismiss();
        console.log("prompt aagya success");
    })
    await page.locator("button[onclick='jsPrompt()']").click();

});

