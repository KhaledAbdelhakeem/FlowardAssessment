class SignupPage {
  
  get myAccountBtn() {
    return $('(//android.widget.ImageView[@resource-id="com.q8.flowers.app:id/navigation_bar_item_icon_view"])[5]');
  }
  get nameField() {
    return $('//android.widget.TextView[@text="Please add your full name"]');
  }

  get emailField() {
    return $('//android.widget.EditText[@content-desc="signup_email"]');
  }

  get passwordField() {
    return $('//android.widget.TextView[@text="Enter your new password"]');
  }

  get submitButton() {
    return $('//android.widget.ScrollView/android.view.View/android.widget.Button');
  }
  get skipButton() {
    return $('//android.view.View[@content-desc="Skip"]');
  }
  get phoneField() {
    return $('//android.widget.TextView[@text="Your Phone Number"]');  
  }
  get successMessage() {
  
    return $('//android.widget.TextView[contains(@text,"success")]');
  }

  async openMyAccount() {
    await this.myAccountBtn.click();
  }

  async signUp(email, password, phone) {
    // 1) Email
    await this.emailField.setValue(email);
    await this.continueBtn.click();

    // 2) Password
    await this.passwordField.setValue(password);
    await this.continueBtn.click();

    // 3) Mobile phone
    await this.phoneField.setValue(phone);
    await this.continueBtn.click();
    await this.skipButton.click();
  }

  async isSuccessMessageDisplayed() {
    return this.successMessage.isDisplayed();
  }
}

export default new SignupPage();
