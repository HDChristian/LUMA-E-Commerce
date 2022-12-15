const purchaseProductPage = require('../pageobjects/purchaseProduct.page');

describe('Check Out', () => {

    it('Should Purchase a Product', async() => {
        await browser.url('https://magento.softwaretestingboard.com/argus-all-weather-tank.html')
        await purchaseProductPage.purchaseProduct('hdchristian@outlook.com', 'Hans', 'Christian', 'ProOnezSS', '12 Cornwall Street', 'Falmouth', 'Trelawny', '00000', 'Jamaica', '8768849460', 'Table Rate')
        await expect(purchaseProductPage.confirmationMessage).toHaveTextContaining('Thank you for your purchase')
    })
})