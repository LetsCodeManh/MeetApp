# MeetApp

## Objective

To build a serverless, progressive web application (PWA) with React using a test-driven development (TDD) technique. The application uses the Google Calender API to fetch upcoming events.

## The 5 Ws

### Who

The users of your Meet application. It is for everybody, who wants to use it.

### What

A progressive web app with the ability to work offline and a serverless backend developed using a TDD technique.

### When

If you want to know about the upcoming events in your city or for a specific city.

### Where

The server, in this case, is a serverless function hosted by a cloud provider (e.g., AWS). The application itself is also hosted online to make it shareable and installable. It can be used even when the user is offline. As it’s responsive, it displays well on any device.

### Why

Well, I just want to learn new skills and technology.
Serverless is the next generation of cloud infrastructure, PWA provides great user experience and performance, and the TDD technique ensures you have quality code and adequate test coverage. All of these skills, together with data visualization, it is good to know new stuff.

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

### Feature 2: Show/ Hide an Even’s details

- **Scenario 1:** An event element is collapsed by default

  - **Given** - The user has opened the events page
  - **When** - The user views the list of events
  - **Then** - Each event should be displayed in a collapsed format, showing only basic information such as the event title and date

- **Scenario 2**: User can expand an event to see its details

  - **Given** - The user is viewing a list of events
  - **When** - The user clicks on the “Expand” or “More Info” button for a specific event
  - **Then** - The event should expand to reveal additional details such as location, description, ticket information, and etc.

- **Scenario 3**: User can collapse an event to hide its details

  - **Given** - The user is viewing a list of events
  - **When** - The use clicks on the “Collapse” or “Less Info” button for a specific event
  - **Then** - The event should collapse, hiding the additional details and returning to the basic information view

- **User Stories Example**: As a **user**, I would like to **show/ hide events details** so that **I can see more/ less information about an event.**

### Feature 3: Specify Number of Events

- **Scenario 1**: When user hasn’t specified a number, 32 is the default number

  - **Given** - The user has opened the events page
  - **When** - The user views the list of events
  - **Then** - 32 events should be displayed by default

- **Scenario 2**: User can change the number of events they want to see

  - **Given** - The user is viewing a list of events
  - **When** - The user enters a number in the “Number of Events” input field
  - **Then** - The number of events displayed should update to match the number entered by the user
  - **And** - The max number of events that can displayed is 100, if user enter more than 100, it will only display 100 events not more.

- **User Stories Example**: As a **user**, I would like to **specify the number of events I want to view in the app** so that **I can see more or fewer events in the events list at once.**

### Feature 4: Use the App when Offline

- **Scenario 1:** Show cached data when there’s no internet connection

  - **Given** - The user is using the app while offline
  - **When** - The user opens the events page
  - **Then** - The app should show a cached version of the events from the last time the user was online
  - **And** - The app should display a message indicating that the data is from the last time the user was online. For example: “Last time online: 1:30pm”

- **Scenario 2**: Show error when user changes the settings (city, time rage)

  - **Given** - The use is using the app while offline
  - **When** - The user attempts to change the city or time range filter settings
  - **Then** - The app should display an error message indicating that a connection is required to change the settings
  - **And** - The settings should not be changed

- **User Stories Example**: As a **user**, I would like to **use the app when offline** so that **I can see the events I viewed the last time I was online.**

### Feature 5: Data Visualization

- **Scenario 1**: Show a chart with the number of upcoming events in each city

  - **Given** - The user is on the events page
  - **When** - The user clicks on the “Data Visualization” button
  - **Then** - A chart should be displayed showing the number of upcoming events in each city
  - **And** - The chart should include options to filter by event type, date range and to download the chart as image/pdf

- **User Stories Example**: As a **user**, I would like to **see a chart showing the upcoming events in each city** so that I know what events are organized in which city

### Feature 6: Add an app Shortcut to the home screen

- **Scenario 1**: Use can add a shortcut to the home screen

  - **Given** - The user is on the home screen of the device
  - **When** - The user opens the app menu
  - **Then** - An option to “Add to home screen” should be available
  - **And** - The user can select the option to add a shortcut to the home screen

- **Scenario 2**: Shortcut is created on home screen

  - **Given** - The user has selected the “Add to home screen” option
  - **When** - the user confirms the addition of the shortcut
  - **Then** - A shortcut to the app should be created on the home screen
  - **And** - The shortcut icon should be visible on the home screen for easy access.

- **User Stories Example**: As a **user**, I would like to **be able to add the app shortcut to my home screen** so that **I can open the app faster.**

## Access

The live app: https://letscodemanh.github.io/MeetApp/
If you want to get teh access if write me an email. I will add you as a tester. You also need a Google account to able to test it.

## Stack

### Frontend

- React
- Recharts
- Moment

### Backend

- Axios
- Google OAuth2
- Google Calendar API

### Testing

- Jest
- Jest-Cucumber
- Enzyme
- Puppeteer
- Atatus
