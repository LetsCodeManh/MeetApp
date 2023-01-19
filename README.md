# MeetApp

## Features

### Feature 1: Filter events by City

- **Scenario 1**: When user hasn’t searched for a city, show upcoming events from all cities

  - **Given** - User hasn’t search for any city.
  - **When** - The user opens the app
  - **Then** - The user should see a list of all upcoming events

- **Scenario 2**: User should see a list of suggestions when they search for a city

  - **Given** - The main page is open
  - **When** - User start typing in the city textbox
  - **Then** - The user should see a list of cities (suggestion) that match what they’ve typed

- **Scenario 3**: User can select a city from the suggested list.

  - **Given** - The user was typing “Berlin” in the city textbox
  - **When** - The user selects a city (e.g., “Berlin, Germany”) from the list
  - **Then** - Their city should be changed to that city (i.e., “Berlin, Germany”) and the user should receive a list of upcoming events in that city.

- **User Stories Example**: As a **user**, I would like to **be able to filter events by city** so that **I can see the list of events that take place in the city.**
