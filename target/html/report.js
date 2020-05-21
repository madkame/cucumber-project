$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("UIComponents.feature");
formatter.feature({
  "line": 1,
  "name": "Testing UI components functionality",
  "description": "",
  "id": "testing-ui-components-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5678418600,
  "status": "passed"
});
formatter.before({
  "duration": 5873537600,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Test UI components link",
  "description": "",
  "id": "testing-ui-components-functionality;test-ui-components-link",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@ui"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I navigated to the website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on \"UI-Components\" link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I select the country from the dropdown",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I select the checkbox",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select the gender radio button",
  "keyword": "Then "
});
formatter.match({
  "location": "Common_Steps.shouldNavigateToWebsite()"
});
formatter.result({
  "duration": 2994100200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "UI-Components",
      "offset": 12
    }
  ],
  "location": "Steps.clickOnUILink(String)"
});
formatter.result({
  "duration": 46099100,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: UI-Components\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.9.1\u0027, revision: \u002763f7b50\u0027, time: \u00272018-02-07T22:25:02.294Z\u0027\nSystem info: host: \u0027DESKTOP-BRS8UI8\u0027, ip: \u0027192.168.1.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 75.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200403170909, moz:geckodriverVersion: 0.26.0, moz:headless: false, moz:processID: 10132, moz:profile: C:\\Users\\Madhuri Ravipati\\A..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: de8ee761-adcc-4158-9d97-c28cab996998\n*** Element info: {Using\u003dlink text, value\u003dUI-Components}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:160)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:425)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:246)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat com.cucumber.MavenCucumberPrototype.Steps.clickOnUILink(Steps.java:49)\r\n\tat ✽.When I click on \"UI-Components\" link(UIComponents.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Steps.select_Dropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.clickCheckbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Steps.clickRadiobutton()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1782583400,
  "status": "passed"
});
formatter.after({
  "duration": 1626703400,
  "status": "passed"
});
});