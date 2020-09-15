Given("Open Chrome Browser", function (){
  Browsers.Item(btChrome).Run("about:blank");
});

Given("I see a {arg} Browser Open", function (browserType){
var browserToLookFor = btChrome;

  if(browserType == "Chrome") { browserToLookFor = btChrome}
  
   if(Browsers.Item(browserToLookFor) == null){
    Log.Error("Cant see " + browserType + " browsers");
   };
});

When("I enter the url {arg}", function (param1){
  let browser = Aliases.browser;
  let browserWindow = browser.BrowserWindow;
//  browserWindow.Click(1025, 130);
  browserWindow.Maximize();
  browser.ToUrl("https://ponchoinsurance.com.au/");
  browser.pagePonchoinsuranceComAu.Wait();
});

