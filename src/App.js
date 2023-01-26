import React, { Component } from "react";

import CitySearch from "./components/CitySearch/CitySearch";
import NumberOfEvents from "./components/NumberOfEvents/NumberOfEvents";
import EventList from "./components/EventList/EventList";

import { checkToken, extractLocations, getEvents } from "./api";
import {
  CartesianGrid,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

class App extends Component {
  state = {
    events: [],
    locations: [],
    seletedLocation: "all",
    eventCount: 32,
    isFetchData: false,
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

  updateLocation = (location) => {
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

  updateEventCount = (eventCount) => {
    getEvents().then(() => {
      this.setState({
        eventCount: eventCount,
      });
    });
  };

  async componentDidMount() {
    this.mounted = true;

    const accessToken = localStorage.getItem("access_token");

    const tokenCheck = accessToken && (await checkToken(accessToken));
    const isTokenValid = !accessToken || tokenCheck.error ? false : true;

    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");

    const authorized = code || isTokenValid;

    const isLocal =
      window.location.href.indexOf("localhost") > -1 ? true : false;

    if ((authorized || isLocal) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({
            events,
            locations: extractLocations(events),
          });
        }
      });
    }

    getEvents().then((events) => {
      if (this.mounted) {
        events = events.slice(0, this.state.eventCount);
        this.setState({
          events,
          locations: extractLocations(events),
          isFetchData: true,
        });
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const { events, eventCount, locations } = this.state;

    return (
      <div className="App">
        <h1>MeetApp</h1>
        <CitySearch
          locations={locations}
          updateLocation={this.updateLocation}
        />
        <NumberOfEvents
          eventCount={eventCount}
          updateEventCount={this.updateEventCount}
        />
        <h2>Events in each city</h2>
        <ResponsiveContainer height={400}>
          <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <CartesianGrid />
            <XAxis type="category" dataKey="city" name="city" />
            <YAxis
              allowDecimals={false}
              type="number"
              dataKey="number"
              name="number of events"
            />
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Scatter name="A school" data={this.getData()} fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>
        <EventList events={events} eventCount={eventCount} />
      </div>
    );
  }
}

export default App;
