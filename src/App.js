import React, { Component } from "react";
import CitySearch from "./components/CitySearch/CitySearch";
import EventList from "./components/EventList/EventList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CitySearch />
        <EventList />
      </div>
    );
  }
}

export default App;
