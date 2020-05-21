Feature: Testing UI components functionality

  @ui
  Scenario: Test UI components link
    Given I navigated to the website
    When I click on "UI-Components" link
    Then I select the country from the dropdown
    Then I select the checkbox
    Then I select the gender radio button
