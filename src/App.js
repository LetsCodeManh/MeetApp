import React, { Component } from "react";
import CitySearch from "./components/CitySearch/CitySearch";
import NumberOfEvents from "./components/NumberOfEvents/NumberOfEvents";
import EventList from "./components/EventList/EventList";
import { extractLocations, getEvents } from "./api";

class App extends Component {
  state = {
    events: [],
    locations: [],
    seletedLocation: "all",
    eventCount: 32,
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        events = events.slice(0, this.state.eventCount);
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, inputNumber) => {
    const { eventCount, seletedLocation } = this.state;

    if (location) {
      getEvents().then((events) => {
        const locationEvents =
          location === "all"
            ? events
            : events.filter((event) => event.location === location);
        const eventsToShow = locationEvents.slice(0, eventCount);
        this.setState({
          events: eventsToShow,
          seletedLocation: location,
        });
      });
    } else {
      getEvents().then((events) => {
        const locationEvents =
          seletedLocation === "all"
            ? events
            : events.filter((event) => event.location === seletedLocation);
        const eventsToShow = location.slice(0, inputNumber);
        this.setState({
          events: eventsToShow,
          eventCount: inputNumber,
        });
      });
    }

    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents,
      });
    });
  };

  getData = () => {
    const { locations, events } = this.state;
    const data = locations.map((location) => {
      const number = events.filter(
        (event) => event.location === location
      ).length;
      const city = location.split(", ").shift();
      return { city, number };
    });

    return data;
  };

  render() {
    const { locations, events } = this.state;

    return (
      <div className="App">
        <CitySearch locations={locations} updateEvents={this.updateEvents} />
        <NumberOfEvents updateEvents={this.updateEvents} />
        <EventList events={events} />
      </div>
    );
  }
}

export default App;
