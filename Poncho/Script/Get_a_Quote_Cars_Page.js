Then("I expect to see the Add the cars you want to cover page", function (){
  aqObject.CheckProperty(Aliases.browser.pagePonchoInsuranceAddTheCarYouWantToCover.textnodeAddTheCarsYouWantToCover, "contentText", cmpEqual, "Add the cars you want to cover.");
  aqObject.CheckProperty(Aliases.browser.pagePonchoInsuranceAddTheCarYouWantToCover.sectionCar1.headerCar1.textnodeSectionHeaderCar1, "contentText", cmpEqual, "Car #1");
  
});

Given("I am on the Get a Quote Cars page", function (){
  aqObject.CheckProperty(Aliases.browser.pagePonchoInsuranceAddTheCarYouWantToCover.textnodeAddTheCarsYouWantToCover, "contentText", cmpEqual, "Add the cars you want to cover.");
  aqObject.CheckProperty(Aliases.browser.pagePonchoInsuranceAddTheCarYouWantToCover.sectionCar1.headerCar1.textnodeSectionHeaderCar1, "contentText", cmpEqual, "Car #1");
});

Given("I can see the Add the car details you want to cover page", function (){
  aqObject.CheckProperty(Aliases.browser.pagePonchoInsuranceAddTheCarYouWantToCover.textnodeAddTheCarsYouWantToCover, "contentText", cmpEqual, "Add the cars you want to cover.");
});

When("I enter the Car Rego {arg}", function (param1){
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  let textbox = browser.pagePonchoInsuranceAddTheCarYouWantToCover.textboxWhatIsYourCarRegistration;
  textbox.Click();
  textbox.SetText("BT77XO");
});

When("I select the State {arg}", function (param1){
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  let vlabel = browser.pagePonchoInsuranceAddTheCarYouWantToCover;
  let vlabel2 = vlabel.sectionCar1.fieldsetWhereIsTheCarRegistered;
  let vlabel3 = vlabel2.labelSelectAState;
  vlabel3.Click();
  vlabel2.listOptionSelectAState.Click();
  aqObject.CheckProperty(vlabel3, "contentText", cmpEqual, "NSW");
  vlabel.textnode.Keys("~[ReleaseLast]");
});

When("I click Search button", function (){
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  let page = browser.pagePonchoInsuranceAddTheCarYouWantToCover;
  page.buttonSearch.Click();
  page.textnode.Keys("~[ReleaseLast]");
});

Then("I expect to see the car number {arg} in the We found this result", function (param1){

});

Then("I expect to see the car model {arg} in the we found this result", function (param1){
   let browser = Aliases.browser;
  let page = browser.pagePonchoInsuranceAddTheCarYouWantToCover;
  aqObject.CheckProperty(page.sectionCar1.fieldsetWeFoundThisResult.label, "contentText", cmpEqual, "We found this result");
  aqObject.CheckProperty(page.textnodeCarFoundYearModel, "contentText", cmpEqual, "2012 Ford Mondeo");
  browser.BrowserWindow.Maximize();
  page.textnode.Keys("~[ReleaseLast]");
});

Given("I can see my car in the we found the result car list", function (){
   let browser = Aliases.browser;
  let page = browser.pagePonchoInsuranceAddTheCarYouWantToCover;
  aqObject.CheckProperty(page.sectionCar1.fieldsetWeFoundThisResult.label, "contentText", cmpEqual, "We found this result");
  aqObject.CheckProperty(page.textnodeCarFoundYearModel, "contentText", cmpEqual, "2012 Ford Mondeo");
  browser.BrowserWindow.Maximize();
  page.textnode.Keys("~[ReleaseLast]");
});

When("I click Yes This is my car button", function (){
  let browser = Aliases.browser;
  browser.BrowserWindow.Maximize();
  let page = browser.pagePonchoInsuranceAddTheCarYouWantToCover;
  page.textnodeYesThisIsMyCar.Click();
  page.textnode.Keys("~[ReleaseLast]");
});

Then("I expect to see the Where do you park this car at night field", function (){
  aqObject.CheckProperty(Aliases.browser.pagePonchoInsuranceAddTheCarYouWantToCover.sectionCar1.label2, "contentText", cmpEqual, "Where do you park this car at night?");
});
