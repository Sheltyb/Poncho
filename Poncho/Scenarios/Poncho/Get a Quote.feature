Feature: Get a Quote


  Scenario: Launch Get a Quote from Home page
    Given I have launched Poncho Insurance website
    When I click on Get a Quote button on the Poncho main page
    Then I should see the Get a Quote page

  Scenario: Launch Get a Quote from Navigation Menu

  Scenario: Return Back to main site from Quote page

  Scenario: Enter Customer Name on the What should we call you Quote section
    Given I am on the Get a Quote for Poncho Insurance Page
    When I enter my first name "firstName" and last name "lastName"
    And I Select a random Policy Start Date between now and "numberOfDaysInFuture" days in the future
    And When I click on Get a Quote button
    Then I expect to see the Add the cars you want to cover page
