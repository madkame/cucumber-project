Feature: Testing my app

  Scenario Outline: Test Page link
    Given I navigated to the website
    When I click on <Link>
    Then I validate the <Title>

    @regression
    Examples: 
      | Link  | Title                  |
      | About | This is the about page |
