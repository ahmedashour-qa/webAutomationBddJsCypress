Feature: Plan Price & Currency
        Background: Open browser and navigate to site
                Given User at Subscribtion page
        Scenario Outline: Validate the <Plan> plan price & currency is <Currency> for <Country> 
                When User clicks on country select button in header
                And User selects '<Country>' from countries list
                Then User shall find the avaliable '<Plan>' plan with price of '<Price>' of '<Currency>' for '<Country>' page
                Examples:
                        | Country      | Plan    | Price | Currency |
                        | Saudi Arabia | Lite    | 15    | SAR      |
                        | Saudi Arabia | Classic | 25    | SAR      |
                        | Saudi Arabia | Premium | 60    | SAR      |
                        | Bahrain      | Lite    | 2     | BHD      |
                        | Bahrain      | Classic | 3     | BHD      |
                        | Bahrain      | Premium | 6     | BHD      |
                        | Kuwait       | Lite    | 1.2   | KWD      |
                        | Kuwait       | Classic | 2.5   | KWD      |
                        | Kuwait       | Premium | 4.8   | KWD      |
