Then("I expect to see the Add the cars you want to cover page", function (){
  aqObject.CheckProperty(Aliases.browser.pagePonchoInsurance.textnode, "contentText", cmpEqual, "Add the cars you want to cover.");
  let textNode = Aliases.browser.pagePonchoInsurance.section.header.textnode2;
  textNode.Click();
  aqObject.CheckProperty(textNode, "contentText", cmpEqual, "Car #1");
});

Given("I am on the Get a Quote Cars page", function (){
  aqObject.CheckProperty(Aliases.browser.pagePonchoInsuranceAddTheCarYouWantToCover.textboxWhatIsYourCarRegistration, "contentText", cmpEqual, "Add the cars you want to cover.");
  let textNode = Aliases.browser.pagePonchoInsurance.section.header.textnode2;
  textNode.Click();
  aqObject.CheckProperty(textNode, "contentText", cmpEqual, "Car #1");

});

Given("I can see the Add the car details you want to cover page", function (){
  throw new NotImplementedError();
});

When("I enter the Car Rego {arg}", function (param1){
  let browser = Aliases.browser;
  let textbox = browser.pagePonchoInsurance.section;
  let textbox2 = textbox.fieldset.textboxWhatIsYourCarRegistration;
  textbox2.Click();
  textbox2.Keys("^v");
  let vlabel = textbox.fieldset3;
  vlabel.label3.Click();
  vlabel.label4.Click();
  textbox.fieldset4.textnode4.Click();
  vlabel = textbox.fieldset2;
  aqObject.CheckProperty(vlabel.label, "contentText", cmpEqual, "We found this result");
  aqObject.CheckProperty(vlabel.textnode3, "contentText", cmpEqual, "2012 Ford Mondeo");
  textbox.fieldset5.textnode5.Click();
  aqObject.CheckProperty(textbox.label2, "contentText", cmpEqual, "Where do you park this car at night?");
});

When("I select the State {arg}", function (param1){
  throw new NotImplementedError();
});

When("I click Search button", function (){
  throw new NotImplementedError();
});

Then("I expect to see the car number {arg} in the We found this result", function (param1){
  throw new NotImplementedError();
});

Then("I expect to see the car model {arg} in the we found this result", function (param1){
  throw new NotImplementedError();
});

Given("I can see my car in the we found the result car list", function (){
  throw new NotImplementedError();
});

When("I click Yes This is my car button", function (){
  throw new NotImplementedError();
});

Then("I expect to see the Where do you park this car at night field", function (){
  throw new NotImplementedError();
});
