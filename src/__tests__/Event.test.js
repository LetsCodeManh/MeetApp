import React from "react";
import { shallow } from "enzyme";
import Event from "../components/Event.js/Event";

describe("<Event /> component", () => {
  let EventWrapper;
  beforeAll(() => {
    EventWrapper = shallow(<Event />);
  });

  test("render events with collapsed view by default", () => {
    expect(EventWrapper.find(".event .collapsed")).toHaveLength(1);
    expect(EventWrapper.find(".event .expanded")).toHaveLength(1);
  });

  test("can expand an event to show details", () => {
    EventWrapper.find(".event .expand-button").at(0).simulate("click");

    expect(EventWrapper.find(".event .collapsed")).toHaveLength(0);
    expect(EventWrapper.find(".event .expanded")).toHaveLength(1);
  });

  test("can collapse an event to hide details", () => {
    EventWrapper.find(".event .collapse-button").at(0).simulate("click");

    expect(EventWrapper.find(".event .collapsed")).toHaveLength(1);
    expect(EventWrapper.find(".event .expanded")).toHaveLength(0);
  });
});
