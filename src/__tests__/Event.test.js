import React from "react";
import { shallow } from "enzyme";
import Event from "../components/Event/Event";
import { mockData } from "../MockData/mockData";
import moment from "moment";

describe("<Event /> component", () => {
  let EventWrapper, event;
  beforeAll(() => {
    event = mockData[0];
    EventWrapper = shallow(<Event event={event} />);
  });

  test("render event fields and information", () => {
    expect(EventWrapper.find(".summary")).toHaveLength(1);
    expect(EventWrapper.find(".location")).toHaveLength(1);
    expect(EventWrapper.find(".startDate")).toHaveLength(1);

    expect(EventWrapper.find(".summary").text()).toBe(event.summary);
    expect(EventWrapper.find(".location").text()).toBe(event.location);
    expect(EventWrapper.find(".startDate").text()).toBe(
      moment(event.start.dateTime).format("MMMM Do YYYY, h:mm a")
    );
  });

  test("default state isExpanded", () => {
    expect(EventWrapper.state("isExpanded")).toBe(false);
  });

  test("render event details on click", () => {
    EventWrapper.setState({
      isExpanded: false,
    });
    EventWrapper.find(".expand-collapse-buttons button").simulate("click");
    expect(EventWrapper.find(".description").text()).toBe(event.description);
  });

  test("hide event details on click", () => {
    EventWrapper.setState({
      isExpanded: true,
    });
    EventWrapper.find(".expand-collapse-buttons button").simulate("click");
    expect(EventWrapper.find(".description")).toHaveLength(0);
  });
});
