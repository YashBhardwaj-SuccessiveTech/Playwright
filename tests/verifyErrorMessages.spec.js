const {test, expect} = require("@playwright/test");

test("verify error messages for login" , async function({page}){
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    console.log(page.viewportSize().height);
    console.log(page.viewportSize().width);

    await page.getByPlaceholder("Username").type("Admin", {delay: 100});

    await page.getByPlaceholder("Password").type("a743in123", {delay:200});

    await page.locator("//button[@type='submit']").click();

    const errormsg = await page.locator("//p[contains(@class,'oxd-alert-content-text')]").textContent();
    
    console.log(`the error message is : ${errormsg}`);

    // this is partially checking 
    expect(errormsg.includes("Invalid")).toBeTruthy();

    // Now if we want to check completely then we will do this
    expect(errormsg==="Invalid credentials").toBeTruthy();

    

});

