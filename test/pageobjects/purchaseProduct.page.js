const { default: $ } = require('webdriverio/build/commands/element/$');
const page = require('./page');

 // This is a sub page with specific selectors and methods for a specific page
 
class purchaseProductPage extends page {
   
    // Selectors are defined using getter method

    get topName () {
        return $("a[title='Argus All-Weather Tank']");
    }

    get topSizeM () {
        return $("//div[@class='swatch-opt-694']//div[@id='option-label-size-143-item-168']");
    }

    get topColor () {
        return $("(//div[@id='option-label-color-93-item-52'])[1]");
    }

    get btnAddToCart () {
        return $("(//span[contains(text(),'Add to Cart')])[3]");
    }

    get shoppingCart () {
        return $("div[data-bind='html: $parent.prepareMessageForHtml(message.text'] a");
    }

    get proceedToCheckOut () {
        return $("button[title='Proceed to Checkout'] span");
    }

    get emailInput () {
        return $("#customer-email-fieldset #customer-email");
    }

    get firstNameInput () {
        return $("[name='firstname']");
    }

    get lastNameInput () {
        return $("[name='lastname']");
    }

    get companyNameInput () {
        return $("[name='company']");
    }

    get streetNameInput () {
        return $("[name='street[0]']");
    }

    get cityNameInput () {
        return $("[name='city']");
    }

    get stateNameInput () {
        return $("[name='region_id']");
    }

    get zipCodeInput () {
        return $("[name='postcode']");
    }

    get countryNameInput () {
        return $("[name='country_id']");
    }

    get phoneNumInput () {
        return $("[name='telephone']");
    }

    get shippingMethodInput () {
        return $("input[value='tablerate_bestway']");
    }

    get nextButton () {
        return $("[class='button action continue primary']");
    }

    get placeOrder () {
        return $("[title='Place Order']");
    }

    get thankYouMessage () {
        return $("[data-ui-id='page-title-wrapper']");
    }

    get createAccount() {
        return $("a[class='action primary'] span")
    }

    get orderNumber() {
        return $("div[class='checkout-success'] p span")
    }

    /**
     * Automation Code Block used to interact with the page
     * This includes the logging in using the users credentials
     */

    async purchaseProductPage (emailInput, firstNameInput, lastNameInput, companyNameInput, streetNameInput, cityNameInput, stateNameInput, countryNameInput, zipCodeInput,) {

        await this.topName.click();
        await this.topSizeM.click();
        await this.topColor.click();
        await this.btnAddToCart.click();
        await this.shoppingCart.click();
        await this.proceedToCheckOut.waitForClickable();
        await this.proceedToCheckOut.click();
        await this.emailInput.setValue(emailInput);
        await this.firstNameInput.setValue(firstNameInput);
        await this.lastNameInput.setValue(lastNameInput);
        await this.companyNameInput.setValue(companyNameInput);
        await this.streetNameInput.setValue(streetNameInput);
        await this.cityNameInput.setValue(cityNameInput);
        await this.stateNameInput.setAttribute('data-title', stateNameInput);
        await this.zipCodeInput.setValue(zipCodeInput);
        await this.countryNameInput.setAttribute('data-title', countryNameInput);
        await this.phoneNumInput.setValue(this.phoneNumInput),
        await this.shippingMethodInput.click();
        await this.nextButton.waitForClickable();
        await this.nextButton.click();
        await this.placeOrder.waitForClickable();
        await this.placeOrder.click();

    };
    async getOrderNumber() {
        await this.orderNumber.waitForDisplayed();
        return await this.orderNumber.getText()
    }
    async open() {
        await super.open('checkout./page');
    }

};