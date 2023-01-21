import React, { Component } from "react";
import CitySearch from "./components/CitySearch/CitySearch";
import EventList from "./components/EventList/EventList";
import NumberOfEvents from "./components/NumberOfEvents/NumberOfEvents";
import { mockData } from "./MockData/mock-data";
import { extractLocations } from "./api";

class App extends Component {
  state = {
    events: [],
    locations: [],
  };

  render() {
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} />
        <NumberOfEvents />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
