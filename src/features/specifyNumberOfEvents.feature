Feature: Specify Number of Events

Scenario: When user hasn’t specified a number, 32 is the default number
Given The user has opened the events page
When The user views the list of events
Then 32 events should be displayed by default

Scenario: User can change the number of events they want to see
Given The user is viewing a list of events
When The user enters a number in the “Number of Events” input field
Then The number of events displayed should update to match the number entered by the user