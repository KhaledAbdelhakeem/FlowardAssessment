const { When, Then } = require('@wdio/cucumber-framework');
const HomePage = require('../../pages/homePage');
const ProductPage = require('../../pages/productPage');
const CartPage = require('../../pages/cartPage');
const { expect } = require('chai');

When('I select a product', async () => {
  await HomePage.openFirstProduct();
});

When('I add the product to the cart', async () => {
  await ProductPage.addToCart();
  await ProductPage.openCart();
});

Then('I should see the product in the cart', async () => {
  const isItemVisible = await CartPage.isItemDisplayed();
  expect(isItemVisible).to.be.true;
});
