//addToCart Page Object
 
 
const Page = require('./page');
 
/**
 * sub page containing specific selectors and methods for a specific page
 */
class addToCartPage extends Page {
 
    get argusAllWeatherTank () {
        return $("[title='Argus All-Weather Tank']")
    }
 
    get topSizeM () {
        return $("#option-label-size-143-item-168");
    }
 
    get topColor () {
        return $("#option-label-color-93-item-52")
    }
 
    get btnAddToCart () {
        return $("button[id='product-addtocart-button'] span")
    }
 
    get cartIcon () {
        return $('.counter-number')
    }
 
    get cartSuccessMessage () {
        return $('.message-success')
    }
 
    async addToCart () {
        await argusAllWeatherTank.scrollIntoView();
        await argusAllWeatherTank.click();
        await this.topSizeM.click();
        await this.topColor.click();
        await this.btnAddToCart.click();
 
    };
 
 
    async open () {
        await super.open('checkout/cart/');
    }
};
 
 
 
module.exports = new addToCartPage();