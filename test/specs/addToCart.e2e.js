//addToCart Spec file
const addToCartPage = require('../pageobjects/addToCart.page');
 
 
 
describe.skip('Add to Cart', async () => {
 
    it('Should add an item to the cart', async () => {
        await browser.url('https://magento.softwaretestingboard.com/')
        await addToCartPage.addToCart()
        await expect(addToCartPage.cartSuccessMessage).toHaveTextContaining('You added Breathe-Easy Tank to your shopping cart.');
 
    });
 
});