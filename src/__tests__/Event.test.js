import React from "react";
import { shallow } from "enzyme";
import Event from "../components/Event.js/Event";
import { mockData } from "../MockData/mock-data";

describe("<Event /> component", () => {
  let EventWrapper, event;
  beforeAll(() => {
    event = mockData[0];
    EventWrapper = shallow(<Event event={event} />);
  });

  test("component receives event prop", () => {
    expect(EventWrapper.props().event).toBeDefined();
  });

  
});
