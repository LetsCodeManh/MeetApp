import React from "react";
import { shallow } from "enzyme";
import NumberOfEvents from "../components/NumberOfEvents/NumberOfEvents";
import { mockData } from "../MockData/mock-data";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsWrapper;
  beforeAll(() => {
    NumberOfEventsWrapper = shallow(<NumberOfEvents events={mockData} />);
  });

  test("default number of events displayed is 32", () => {
    expect(NumberOfEventsWrapper.state("numberOfEvents")).toEqual(32);
  });

  test("user can change the number of events displayed", () => {
    const eventObject = { target: { value: "50" } };
    NumberOfEventsWrapper.find("input").simulate("change", eventObject);

    expect(NumberOfEventsWrapper.state("numberOfEvents")).toHaveLength(50);
  });
});
