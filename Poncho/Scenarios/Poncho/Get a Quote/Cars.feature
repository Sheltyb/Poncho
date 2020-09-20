Feature: Cars


  Scenario: Enter the Car details in the Car page
    Given I am on the Get a Quote Cars page
    And I can see the Add the car details you want to cover page
    When I enter the Car Rego "BT77XO"
    And I select the State "NSW"
    And I click Search button
    Then I expect to see the car number "BT77XO" in the We found this result
    And I expect to see the car model "2012 FORD MONDEO" in the we found this result

  Scenario: Select Yes This is my car
    Given I am on the Get a Quote Cars page
    And I can see my car in the we found the result car list
    When I click Yes This is my car button
    Then I expect to see the Where do you park this car at night field

  Scenario: Enter details for Where do you park this car at night
    Given I am on the Get a Quote Cars page
