Feature: Plan type
    Background: Open browser and navigate to site
        Given User at Subscribtion page
    Scenario Outline: Validate the Plan type for <Country>
        When User clicks on country select button in header
        And User selects '<Country>' from countries list
        Then User shall find the avaliable plan types
        Examples:
            | Country      |
            | Saudi Arabia |
            | Bahrain      |
            | Kuwait       |
