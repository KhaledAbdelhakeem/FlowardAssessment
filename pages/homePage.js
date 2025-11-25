class HomePage {
 

  get homeTitle() {
    
    return $('//android.widget.Button[@content-desc="Gift now"]'); 

  }

  get firstProduct() {
    
    return $('(//android.widget.ImageView[contains(@content-desc, "EGP")])[1]');
    
  }

  async isDisplayed() {
    return this.homeTitle.isDisplayed();
  }

  async openFirstProduct() {
    await this.firstProduct.click();
  }
}

module.exports = new HomePage();
