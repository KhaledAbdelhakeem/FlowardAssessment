class CartPage {

  get firstCartItem() {
    return $('(//android.widget.RelativeLayout[@resource-id="com.q8.flowers.app:id/cart_item_container"]');
  }

  async isItemDisplayed() {
    return this.firstCartItem.isDisplayed();
  }
}

module.exports = new CartPage();
