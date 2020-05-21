package com.cucumber.MavenCucumberPrototype;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(format = { "pretty", "html:target/html/"}, 
features = { "src/test/resource" },
tags = { "@regression"}
)

public class Runner_RegressionTest {

}
