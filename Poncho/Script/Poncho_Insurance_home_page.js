
Then("I expect to see the Poncho Insurance main web page", function (){
  aqObject.CheckProperty(Aliases.browser.pagePonchoinsuranceComAu.headerDesktop.nav.linkLogo.imagePonchoInsuranceLogoSvg, "contentText", cmpEqual, "");
});

Given("I have launched Poncho Insurance website", function (){
  aqObject.CheckProperty(Aliases.browser.pagePonchoinsuranceComAu.headerDesktop.nav.linkLogo.imagePonchoInsuranceLogoSvg, "contentText", cmpEqual, "");
});

When("I click on Get a Quote button on the Poncho main page", function (){
  let browser = Aliases.browser;
  //browser.BrowserWindow.Maximize();
  browser.pagePonchoinsuranceComAu.sectionSqueezebanner.buttonGetAQuote.ClickButton();
});


