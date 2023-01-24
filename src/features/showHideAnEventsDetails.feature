Feature: Show/ Hide an Even’s details

Scenario: An event element is collapsed by default
Given The user has opened the events page
When The user views the list of events
Then Each event should be displayed in a collapsed format, showing only basic information such as the event title and date

Scenario: User can expand an event to see its details
Given The user is viewing a list of events
When The user clicks on the 'Expand' or 'More Info' button for a specific event
Then The event should expand to reveal additional details such as location, description, ticket information, and etc.

Scenario: User can collapse an event to hide its details
Given The user is viewing a list of events
When The use clicks on the 'Collapse' or 'Less Info' button for a specific event
Then The event should collapse, hiding the additional details and returning to the basic information view