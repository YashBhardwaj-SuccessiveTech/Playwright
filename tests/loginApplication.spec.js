const {test, expect } =  require("@playwright/test");
const loginpage = require("../pages/loginpage");
const HomePage = require("../pages/homepage");

test("first test using pom", async function({page}){
    await page.goto("https://freelance-learn-automation.vercel.app/login");
    const loginPage = new loginpage(page);
    await loginPage.logintoApplication("admin@email.com","admin@123");
    console.log("login successfull"); 
    const Homepage = new HomePage(page);
    await Homepage.verifyManageOption();
    await Homepage.logouttoApplication();
    await loginPage.verifylogout();
    console.log("logout from application suceessfully");

});

