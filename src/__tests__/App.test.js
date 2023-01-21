import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import EventList from "../components/EventList/EventList";
import CitySearch from "../components/CitySearch/CitySearch";
import NumberOfEvents from "../components/NumberOfEvents/NumberOfEvents";

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
    AppWrapper = shallow(<App />);
  });

  test("App passes events state as a prop to EventList", () => {
    const AppEventsState = AppWrapper.state("events");

    expect(AppEventsState).not.toEqual(undefined);
    expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
    AppWrapper.unmount();
  });

  test("App passes locations state as a prop to CitySerach", () => {
    const AppLocationsState = AppWrapper.state("locations");

    expect(AppLocationsState).not.toEqual(undefined);
    expect(AppWrapper.find(CitySearch).props().locations).toEqual(AppLocationsState);
    AppWrapper.unmount();
  });
});
