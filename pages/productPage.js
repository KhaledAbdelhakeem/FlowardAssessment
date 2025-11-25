class ProductPage {
 

  get addToCartButton() {
    return $('//android.widget.Button[@resource-id="com.q8.flowers.app:id/addToCartBtn"]');
  }
  get AddToCartMessage() {
      
    return $('//android.widget.TextView[@resource-id="com.q8.flowers.app:id/product_added_title_text"]');
  }
  get cartIcon() {
    return $('(//android.widget.ImageView[@resource-id="com.q8.flowers.app:id/navigation_bar_item_icon_view"])[3]');
  }

  async addToCart() {
    await this.addToCartButton.click();
  }

  async openCart() {
    await this.cartIcon.click();
  }
}

module.exports = new ProductPage();
