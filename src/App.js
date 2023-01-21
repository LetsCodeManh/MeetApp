import React, { Component } from "react";
import CitySearch from "./components/CitySearch/CitySearch";
import NumberOfEvents from "./components/NumberOfEvents/NumberOfEvents";
import EventList from "./components/EventList/EventList";
import { mockData } from "./MockData/mock-data";
import { extractLocations, getEvents } from "./api";

class App extends Component {
  state = {
    events: [],
    locations: [],
  };

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      this.setState({ events, locations: extractLocations(events) });
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location) => {
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

  render() {
    const { locations, events } = this.state

    return (
      <div className="App">
        <CitySearch
          locations={locations}
          updateEvents={this.updateEvents}
        />
        <NumberOfEvents />
        <EventList events={events} />
      </div>
    );
  }
}

export default App;
