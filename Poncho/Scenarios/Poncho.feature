Feature: Poncho


  Scenario: Open Chrome Browser
    * Open Chrome Browser

  Scenario: Navigate to Poncho Insurance Website
    Given I see a "browserType" Browser Open
    When I enter the url "https://ponchoinsurance.com.au/"
    Then I expect to see the Poncho Insurance main web page
