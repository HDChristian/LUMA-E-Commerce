const securePage = require("../pageobjects/secure.page");
const signUpPage = require("../pageobjects/signUp.page");

describe.skip('My sign up application',() => {  

    it.only('Should sign up with valid credentials', async() => {

        await browser.reloadSession();
        await signUpPage.open();
        let newEmail = Math.random().toString(12) + "gmail.com";

        await signUpPage.signup('Hans', 'Christian', newEmail, 'P@ssW0rd7', 'P@ssW0rd7');
        await expect(securePage.myAccountTitle).toBeExisting();
        await expect(securePage.myAccountTitle).toHaveTextContaining('My Account');
    });
});