package com.cucumber.MavenCucumberPrototype;

import java.util.List;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class Steps {
	WebDriver driver = null;

	@Before
	public void testSetUp() {
		System.setProperty("webdriver.gecko.driver", "C:\\Software\\geckodriver.exe");
		driver = new FirefoxDriver();
	}

	@After
	public void testShutDown() {
		driver.quit();
	}

	@Given("^I navigated to the website$")
	public void shouldNavigateToWebsite() throws Throwable {

		driver.get("http://localhost:3000/");
		Thread.sleep(1000);
	}

	@When("^I click on ([^\"]*)$")
	public void clickOnLink(String link) throws Throwable {

		driver.findElement(By.linkText(link)).click();
	}

	@When("^I click on \"([^\"]*)\" link$")
	public void clickOnUILink(String uilink) throws Throwable {

		driver.findElement(By.linkText(uilink)).click();
	}

	@Then("^I povide values to the fields$")
	public void povideValuesToTheFields(DataTable table) throws Throwable {
		List<List<String>> data = table.raw();

		driver.findElement(By.id("name")).sendKeys(data.get(1).get(1));
		driver.findElement(By.id("age")).sendKeys(data.get(2).get(1));
		driver.findElement(By.id("email")).sendKeys(data.get(3).get(1));
		driver.findElement(By.xpath("//input[@value='Submit']")).click();

	}

	@Then("^I validate the ([^\"]*)$")
	public void validateTitle(String title) throws Throwable {
		String actual = driver.findElement(By.xpath("//*[@id=\"app\"]/div/div[2]/h2")).getText();
		Assert.assertEquals(title, actual);

	}

	@Then("^I select the country from the dropdown$")
	public void select_Dropdown() throws Throwable {
		Select dropList = new Select(driver.findElement(By.id("countries")));
		dropList.selectByValue("Guntur");
		Alert alert = driver.switchTo().alert();
		alert.accept();

	}

	@Then("^I select the checkbox$")
	public void clickCheckbox() throws Throwable {
		driver.findElement(By.name("sleepy")).click();
	}

	@Then("^I select the gender radio button$")
	public void clickRadiobutton() throws Throwable {
		driver.findElement(By.name("gender1")).click();
	}

}
