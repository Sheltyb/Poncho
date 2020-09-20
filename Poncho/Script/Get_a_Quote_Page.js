 var browser = Aliases.browser;
 var page = Aliases.browser.pagePonchoInsuranceGetAQuote;
 
Then("I should see the Get a Quote page", function (){
  aqObject.CheckProperty(page.textnodeTitleGetAQuoteForPonchoInsurance, "contentText", cmpEqual, "Get a quote for Poncho Insurance");
  aqObject.CheckProperty(page.sectionWhatShouldWeCallYou.header.textnode2, "contentText", cmpEqual, "What should we call you?");
  aqObject.CheckProperty(page.sectionWhatShouldWeCallYou.fieldset.textboxFirstName, "Text", cmpEqual, "");

});

Given("I am on the Get a Quote for Poncho Insurance Page", function (){
 aqObject.CheckProperty(page.textnodeTitleGetAQuoteForPonchoInsurance, "contentText", cmpEqual, "Get a quote for Poncho Insurance");
  aqObject.CheckProperty(page.sectionWhatShouldWeCallYou.header.textnode2, "contentText", cmpEqual, "What should we call you?");
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

When("I Select a random Policy Start Date between now and {arg} days in the future", function (futureDateCount){
  var currentDate = new Date();
  var futureDateIncrement = Number(futureDateCount);
  var dateToSelect = new Date();
  dateToSelect.setDate(currentDate.getDate() + futureDateIncrement);
  var dateToSelectStr = dateToSelect.getDate() + "/" + dateToSelect.getMonth() + "/" + dateToSelect.getYear();
  
  let textbox = page.sectionWhatShouldWeCallYou.fieldsetWhenWouldYouLikeYourPolicyToStart.textboxWhenWouldYouLikeYourPolic;
  let textNode = browser.pagePonchoInsuranceGetAQuote.sectionWhatShouldWeCallYou.fieldsetWhenWouldYouLikeYourPolicyToStart;
  textNode.textnodeSelectCalendar.Click();
  textNode.textboxWhenWouldYouLikeYourPolic.Click();
  textNode.textnode.Click();
    

});

When("When I click on Get a Quote button", function (){
  page.buttonGetAQuote.ClickButton();
});

