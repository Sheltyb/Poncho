 var browser = Aliases.browser;
 var page = browser.pagePonchoInsuranceGetAQuote;
 
Then("I should see the Get a Quote page", function (){
  aqObject.CheckProperty(Aliases.browser.pagePonchoInsuranceGetAQuote.textnode, "contentText", cmpEqual, "Get a quote for Poncho Insurance");
  aqObject.CheckProperty(Aliases.browser.pagePonchoInsuranceGetAQuote.sectionWhatShouldWeCallYou.header.textnode2, "contentText", cmpEqual, "What should we call you?");
  aqObject.CheckProperty(Aliases.browser.pagePonchoInsuranceGetAQuote.sectionWhatShouldWeCallYou.fieldset.textboxFirstName, "Text", cmpEqual, "");

});

Given("I am on the Get a Quote for Poncho Insurance Page", function (){
 aqObject.CheckProperty(Aliases.browser.pagePonchoInsuranceGetAQuote.textnode, "contentText", cmpEqual, "Get a quote for Poncho Insurance");
  aqObject.CheckProperty(Aliases.browser.pagePonchoInsuranceGetAQuote.sectionWhatShouldWeCallYou.header.textnode2, "contentText", cmpEqual, "What should we call you?");
});

When("I enter my first name {arg} and last name {arg}", function (firstName, lastName){
//  let browser = Aliases.browser;
//  let page = browser.pagePonchoInsuranceGetAQuote;
  let textbox = page.sectionWhatShouldWeCallYou;
  let textbox2 = textbox.fieldset.textboxFirstName;
  //textbox2.Click();
  textbox2.SetText(firstName);
  textbox2 = textbox.fieldset3.textboxLastName;
  //textbox2.Click();
  textbox2.SetText(lastName);
 });

When("I Select a random Policy Start Date between now and {arg} days in the future", function (param1){
 
  let textbox = page.sectionWhatShouldWeCallYou;
  let textNode = textbox.fieldset2;
  textNode.textnode3.Click();
  aqObject.CheckProperty(textNode.textboxWhenWouldYouLikeYourPolic, "Text", cmpEqual, "17/09/2020");
  textNode.textnode4.Click();
  page.buttonGetAQuote.ClickButton();
  page.Wait();
});

When("When I click on Get a Quote button", function (){
  page.buttonGetAQuote.ClickButton();
});

