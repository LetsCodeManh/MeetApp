import { shallow } from "enzyme";
import { loadFeature, defineFeature } from "jest-cucumber";
import Event from "../components/Event/Event";
import { mockData } from "../MockData/mockData";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  let EventWrapper;

  test("An event element is collapsed by default", ({ given, when, then }) => {
    given("The user has opened the events page", () => {
      EventWrapper = shallow(<Event event={mockData[0]} />);
    });
    when("The user views the list of events", () => {});
    then(
      "Each event should be displayed in a collapsed format, showing only basic information such as the event title and date",
      () => {
        expect(EventWrapper.find(".summary")).toHaveLength(1);
        expect(EventWrapper.find(".location")).toHaveLength(1);
        expect(EventWrapper.find(".startDate")).toHaveLength(1);

        expect(EventWrapper.find(".description")).toHaveLength(0);
      }
    );
  });

  test("User can expand an event to see its details", ({
    given,
    when,
    then,
  }) => {
    given("The user is viewing a list of events", () => {
      EventWrapper = shallow(<Event event={mockData[0]} />);
    });
    when(
      "The user clicks on the 'Expand' or 'More Info' button for a specific event",
      () => {
        EventWrapper.find(".expand-collapse-buttons button").simulate("click");
      }
    );
    then(
      "The event should expand to reveal additional details such as location, description, ticket information, and etc.",
      () => {
        expect(EventWrapper.find(".description")).toHaveLength(1);
      }
    );
  });

  test("User can collapse an event to hide its details", ({
    given,
    when,
    then,
  }) => {
    given("The user is viewing a list of events", async () => {
      EventWrapper = shallow(<Event event={mockData[0]} />);
      EventWrapper.find(".expand-collapse-buttons button").simulate("click");
    });
    when(
      "The use clicks on the 'Collapse' or 'Less Info' button for a specific event",
      () => {
        EventWrapper.find(".expand-collapse-buttons button").simulate("click");
      }
    );
    then(
      "The event should collapse, hiding the additional details and returning to the basic information view",
      () => {
        expect(EventWrapper.find(".description")).toHaveLength(0);
      }
    );
  });
});
