// features/step-definitions/login.steps.js
import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page.js';
import { expect } from 'chai';

const validUser = {
  email: 'testuser@example.com',
  password: 'P@ssw0rd123',
};

Given('the app is launched', async () => {
  await driver.pause(1000);
});

When('I navigate to the Login screen', async () => {
  await LoginPage.openMyAccount();
});

When('I log in with valid credentials', async () => {
  await LoginPage.login(validUser.email, validUser.password);
});

Then('I should be logged in successfully', async () => {
  const loggedIn = await LoginPage.isOnHomePage();
  expect(loggedIn).to.be.true;
});
