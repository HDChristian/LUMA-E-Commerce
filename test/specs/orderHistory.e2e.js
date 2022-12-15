const signUpPage = require("../pageobjects/signUp.page");

describe.skip('Purchase product history', async() => {

    it('Should view purchase in order history', async() => {
        let newEmail = Math.random().toString(12) + "@gmail.com";
            await browser.url('https://magento.softwaretestingboard.com/argus-all-weather-tank.html')
            await purchaseProductPage.purchaseProduct(newEmail, 'Hans', 'Christian', 'ProOnezSS', '12 Cornwall Street', 'Falmouth', 'Trelawny', '00000', 'Jamaica', '8764698826', "Table Rate")

        const orderNumber = await purchaseProductPage.getOrderNumber();
            await purchaseProductPage.createAccount.click();
            await signUpPage.inputPassword.setValue('P@ssW0rd7');
            await signUpPage.inputPassword.inputConfirmPassword.setValue('P@ssW0rd7'); 
            await signUpPage.btnSubmit.click();
            await expect(signUpPage.signupSuccess).toHaveTextContaining('Login Successful');
        
            await orderHistoryPage.myOrders.click()
            await expect(orderHistoryPage.orderNumber).toHaveTextContaining(orderNumber)
    });

});