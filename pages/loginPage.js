class LoginPage {
  
 get myAccountBtn() {
    return $('(//android.widget.ImageView[@resource-id="com.q8.flowers.app:id/navigation_bar_item_icon_view"])[5]');
  }
  get emailField() {
    return $('//android.widget.EditText[@content-desc="signup_email"]');
  }

  get passwordField() {
    return $('//android.widget.TextView[@text="Enter a password"]');
  }

  get loginButton() {
    return $('//android.widget.ScrollView/android.view.View[2]/android.widget.Button');
  }

  async openMyAccount() {
    await this.myAccountBtn.click();
  }

  async login(email, password) {
    // Step 1: Enter email
    await this.emailField.setValue(email);
    await this.continueBtn.click();

    // Step 2: Enter password
    await this.passwordField.setValue(password);
    await this.continueBtn.click();
  }

  async isOnHomePage() {
    // Wait up to 10 seconds for Home page to appear
    return await this.homeScreenMarker.waitForDisplayed({ timeout: 10000 });
  }
}

export default new LoginPage();
