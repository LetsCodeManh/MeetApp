import React from "react";
import { shallow, mount } from "enzyme";
import App from "../App";
import EventList from "../components/EventList/EventList";
import CitySearch from "../components/CitySearch/CitySearch";
import NumberOfEvents from "../components/NumberOfEvents/NumberOfEvents";
import { extractLocations, getEvents } from "../api";
import { mockData } from "../MockData/mock-data";

describe("<App/> component", () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = shallow(<App />);
  });

  test("render list of events", () => {
    expect(AppWrapper.find(EventList)).toHaveLength(1);
  });

  test("render CitySearch", () => {
    expect(AppWrapper.find(CitySearch)).toHaveLength(1);
  });

  test("render NumberOfEvents", () => {
    expect(AppWrapper.find(NumberOfEvents)).toHaveLength(1);
  });
});

describe("<App /> integration", () => {
  let AppWrapper;
  beforeAll(() => {
    AppWrapper = mount(<App />);
  });

  afterAll(() => {
    AppWrapper.unmount();
  });

  test("App passes events state as a prop to EventList", () => {
    const AppEventsState = AppWrapper.state("events");

    expect(AppEventsState).not.toEqual(undefined);
    expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
  });

  test("App passes locations state as a prop to CitySearch", () => {
    const AppLocationsState = AppWrapper.state("locations");

    expect(AppLocationsState).not.toEqual(undefined);
    expect(AppWrapper.find(CitySearch).props().locations).toEqual(
      AppLocationsState
    );
  });

  test("Get list of events matching the city selected by the user", async () => {
    const CitySearchWrapper = AppWrapper.find(CitySearch);
    const locations = extractLocations(mockData);
    CitySearchWrapper.setState({ suggestions: locations });
    const suggestions = CitySearchWrapper.state("suggestions");
    const selectedIndex = Math.floor(Math.random() * suggestions.length);
    const selectedCity = suggestions[selectedIndex];

    await CitySearchWrapper.instance().handleItemClicked(selectedCity);
    const allEvents = await getEvents();
    const eventsToShow = allEvents.filter(
      (event) => event.location === selectedCity
    );

    expect(AppWrapper.state("events")).toEqual(eventsToShow);
  });

  test("Get list of all events when user selects 'See all cities'", async () => {
    const suggestionItems = AppWrapper.find(CitySearch).find(".suggestions li");

    await suggestionItems.at(suggestionItems.length - 1).simulate("click");
    const allEvents = await getEvents();

    expect(AppWrapper.state("events")).toEqual(allEvents);
  });
});
