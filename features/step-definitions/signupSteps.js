// features/step-definitions/signup.steps.js
import { Given, When, Then } from '@wdio/cucumber-framework';
import SignupPage from '../pageobjects/signup.page.js';
import { expect } from 'chai';

const testUser = {
  email: 'testuser@example.com',
  password: 'P@ssw0rd123',
  phone: '01000000068',
};

Given('the app is launched', async () => {
  // You can replace this with a real check later
  await driver.pause(1000);
});

When('I navigate to the Sign Up screen', async () => {
  // Tap on MyAccount to start the signup flow
  await SignupPage.openMyAccount();
});

When('I sign up with valid data', async () => {
  await SignupPage.signUp(testUser.email, testUser.password, testUser.phone);
});

Then('I should see a successful sign up message', async () => {
  const isDisplayed = await SignupPage.isSuccessMessageDisplayed();
  expect(isDisplayed).to.be.true;
});
