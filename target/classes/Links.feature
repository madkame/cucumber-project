Feature: Testing my app

  Background: 
    Given I navigated to the website

  Scenario: Test contact link
    When I click on "Contact" link
    Then I povide values to the fields
      | Fields | Value        |
      | Name   | maddy        |
      | Age    |           56 |
      | Email  | email@em.com |

  Scenario Outline: Test Page link
    When I click on <Link>
    Then I validate the <Title>

    Examples: 
      | Link   | Title                   |
      | Home   | F1 2018 Season Calendar |
      | About  | This is the about page  |
      | Secret | This is the secret page |
