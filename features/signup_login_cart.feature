Feature: Sign up, login, and add item to cart

  Background:
    Given the app is launched

  Scenario: Successful signup with valid data
    Given the app is launched
    When I navigate to the Sign Up screen
    And I sign up with valid data
    Then I should see a successful sign up message

  Scenario: Successful login with valid credentials
    Given the app is launched
    When I navigate to the Login screen
    And I log in with valid credentials
    Then I should be logged in successfully


  Scenario: Add item to cart
    Given I am logged in with the created account
    When I select a product
    And I add the product to the cart
    Then I should see the product in the cart
