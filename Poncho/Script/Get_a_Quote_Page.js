Then("I should see the Get a Quote page", function (){
  aqObject.CheckProperty(Aliases.browser.pagePonchoInsurance.textnode, "contentText", cmpEqual, "Get a quote for Poncho Insurance");
  aqObject.CheckProperty(Aliases.browser.pagePonchoInsurance.section.header.textnode2, "contentText", cmpEqual, "What should we call you?");
  aqObject.CheckProperty(Aliases.browser.pagePonchoInsurance.section.fieldset.textboxFirstName, "Text", cmpEqual, "");

});

Given("I am on the Get a Quote for Poncho Insurance Page", function (){
  throw new NotImplementedError();
});

When("I enter my first name {arg} and last name {arg}", function (firstName, lastName){
  throw new NotImplementedError();
});

When("I Select a random Policy Start Date between now and {arg} days in the future", function (param1){
  throw new NotImplementedError();
});

When("When I click on Get a Quote button", function (){
  throw new NotImplementedError();
});

