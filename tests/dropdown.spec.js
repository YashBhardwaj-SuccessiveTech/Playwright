const {test, expect} = require("@playwright/test");

test("drop down test", async function({page}){
    await page.goto("https://freelance-learn-automation.vercel.app/signup");

    // selecting based on label

    await page.locator("#state").selectOption({label:"Goa"});

    await page.waitForTimeout(2000);

    // here selecting based on value

    await page.locator("#state").selectOption({value:"Himachal Pradesh"});

    await page.waitForTimeout(2000);

    // now here selecting based on index

    await page.locator("#state").selectOption({index: 4});
    await page.waitForTimeout(2000);

    // to get all the values of the dropdown
    const value = await page.locator("#state").textContent();
    // console.log(`Each values of this dropdown are `, value);

    await page.waitForTimeout(2000);

    await expect(value.includes("Sikkim")).toBeTruthy();

    let state = await page.$("#state");
    let allElements = await state.$$("option");

    let ddstatus = false;

    for(let i=1;i<allElements.length;i++){
        let element = allElements[i];
        const currstate = await element.textContent();
        if(currstate=="Odisha"){
            ddstatus = true;
            break;
        }
        console.log("current state in the dropdown is " + currstate);
    }

    expect(ddstatus).toBeTruthy();

    // now for selecting multiple values from a dropdown
    await page.locator("#hobbies").selectOption(["Singing", "Dancing"]);
    await page.waitForTimeout(2000);

})

