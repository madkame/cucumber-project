# Welcome to Cucumber-Selenium!

Hi! This is my complete project in  **Cucumber** with all the different concepts covered as per the project. To begin with create a maven project in eclipse and add the dependencies in pom.xml file from the link [https://mvnrepository.com/](https://mvnrepository.com/)


# Runner Class File

Create a runner class in src/test/java folder which acts as bridge between feature file and step definitions file. Runner class should contain the path of feature file, format and the file path for test report 

## Create Feature file

Create a feature file with the scenario and steps. In this project the topics covered are 
How to do parameter handling? Eg: "Contact"
How to create scenario data tables? Eg: providing values to the fields
How to create Scenario outline data tables? Eg: <Link> <Title>
How to create scenario hooks, tagged scenario hooks? @Before, @After, @smoke, @sanity, @regression
How to run a test suite with different tests using scenario hooks?
How to handle different objects like dropdown, checkbox, textbox, radio button, alerts using selenium with cucumber?


## Reporting using TestNg

Install TestNg plugin in Eclipse using eclipse market place. Provide the path in runner class to save the test reports in target folder. You can save test reports in json or html filetypes.