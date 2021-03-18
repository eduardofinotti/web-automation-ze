@order
Feature: Order
  I as a user
  I need to do orders
  To get my products

  Background: I am logged on application
    Given I am on Ze Delivery application
    And I am logged on application with "eduardo.finotti@hotmail.com" and "amarelo1212"
    And I choose my address "Avenida Paulista, 199"

  @order_success
  Scenario: Do order with success
    Given I search the product "skol"
    And I add 10 in quatity
    And I add product on bag
    And I go to payment form
    And I select cash do payment
    When I finish my order
    When I follow my order done 
    