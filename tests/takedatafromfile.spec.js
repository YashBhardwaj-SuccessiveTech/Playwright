const {test,expect} = require("@playwright/test");

const testdata = JSON.parse(JSON.stringify(require("../testlogin.json")));



test.describe("login with multiple test data", function(){
    
    for(const data of testdata){

        test.describe("login with user", function(){

            test(`login to application ${data.id}`, async ({page})=>{
                await page.goto("https://freelance-learn-automation.vercel.app/login");
                await page.locator("//input[@type='email']").fill(data.useremail);
                await page.getByPlaceholder("Enter Password").fill(data.password);

            })
        })
    }
})



// test("read data from json file", async function({page}){

//     await page.goto("https://freelance-learn-automation.vercel.app/login");

//     await page.locator("//input[@type='email']").fill(testdata.useremail);
    
//     await page.pause();


// })