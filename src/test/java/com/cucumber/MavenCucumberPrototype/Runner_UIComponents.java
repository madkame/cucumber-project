package com.cucumber.MavenCucumberPrototype;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(format = { "pretty", "html:target/html/"}, 
features = { "src/test/resource" },
tags = { "@ui"}
)
//html report html:target/html/
//json report json:target/json/output.json
public class Runner_UIComponents {

}
