Feature: Testing my app

  Scenario Outline: Test Page link
    Given I navigated to the website
    When I click on <Link>
    Then I validate the <Title>

    @smoke
    Examples: 
      | Link | Title                   |
      | Home | F1 2018 Season Calendar |
