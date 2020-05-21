Feature: Testing my app

  Scenario Outline: Test Page link
    Given I navigated to the website
    When I click on <Link>
    Then I validate the <Title>

    @sanity
    Examples: 
      | Link   | Title                   |
      | Secret | This is the secret page |
