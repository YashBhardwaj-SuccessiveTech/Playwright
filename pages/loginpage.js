const {expect} = require("@playwright/test");

class loginpage{

    constructor(page){
        this.page = page;
        this.username = "//input[@id='email1']";
        this.password="//input[@id='password1']";
        this.loginbutton="button[type='submit']";
        this.signInOption = "//h2[text()='Sign In']"
    }

    async verifylogout(){
        await expect(this.page.locator(this.signInOption)).toBeVisible();
    }

    async logintoApplication(user, pass){
        await this.page.fill(this.username, user);
        await this.page.fill(this.password, pass);
        await this.page.click(this.loginbutton);
    }

}

module.exports = loginpage;

