@login
Feature: Login
  I as a user
  I need to do login on application
  To do orders

  Background: It is on application with confirmed age
    Given I am on Ze Delivery application
    And I confirm my age
    And I open the login form

  @login_success
  Scenario: Do login with success
    When I fill email "eduardo.finotti@hotmail.com" and password "amarelo1212"
    And I click on enter application
    Then I am logged with success
  
  @login_invalid_email
  Scenario: Check invalid e-mail
    When I fill email "xxx" and password "amarelo1212"
    And I click on enter application
    Then I see de message "Eita, esse e-mail não parece correto"  
  
  @login_invalid_password
  Scenario: Check invalid password
    When I fill email "eduardo.finotti@hotmail.com" and password "xxxx"
    And I click on enter application
    Then I see de message "Sua senha está muito pequena"
