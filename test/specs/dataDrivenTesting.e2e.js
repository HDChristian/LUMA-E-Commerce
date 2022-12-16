const SecurePage = require('../pageobjects/secure.page');
const SecurePage = require('../pageobjects/signUp.page');
const {faker} = require('@faker-js/faker');
const signUpPage = require('../pageobjects/signUp.page');

describe('LUMA SignUp', () => {
    it('should attempt to sign up using values provided by customer', async () => {
        await signUpPage.signUp.open('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/');
        await signUpPage.signUp(faker.name.firstName(), faker.name.lastName(), faker.internet.password(), faker.internet.confirmPassword());
        await expect(SecurePage.myAccountTitle).toBeExisting();
        await expect(SecurePage.myAccountTitle).toHaveTextContaining('My Account');

        browser.debug();
    });
});