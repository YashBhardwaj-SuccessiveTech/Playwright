const {expect} = require("@playwright/test");

class HomePage{
    constructor(page){
        this.page = page;
        this.menu = "//img[@alt='menu']";
        this.logoutbtn = "//button[text()='Sign out']";
        this.manageoption = "//span[normalize-space()='Manage']"
    }

    async verifyManageOption(){
        await expect(this.page.locator(this.manageoption)).toBeVisible();
    }

    async logouttoApplication(){
        await this.page.click(this.menu);
        await this.page.click(this.logoutbtn);
    }
}

module.exports = HomePage;
