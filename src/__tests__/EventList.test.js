import React from "react";
import { shallow } from "enzyme";
import EventList from "../components/EventList/EventList";
import Event from "../components/Event/Event";
import { mockData } from "../MockData/mockData";

describe("<EventList /> component", () => {
  test("render correct number of events", () => {
    const EventListWrapper = shallow(
      <EventList events={mockData} eventCount={mockData.length} />
    );
    expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
  });
});
