import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import EventList from "../components/EventList/EventList";
import CitySearch from "../components/CitySearch/CitySearch";

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
});
