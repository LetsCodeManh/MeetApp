import { mount } from "enzyme";
import { loadFeature, defineFeature } from "jest-cucumber";
import App from "../App";
import EventList from "../components/EventList/EventList";
import NumberOfEvents from "../components/NumberOfEvents/NumberOfEvents";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  let AppWrapper;

  test("When user hasn’t specified a number, 32 is the default number", ({
    given,
    when,
    then,
  }) => {
    given("The user has opened the events page", () => {});
    when("The user views the list of events", () => {
      AppWrapper = mount(<App />);
    });
    then("32 events should be displayed by default", () => {
      AppWrapper.update();
      expect(AppWrapper.find(EventList).length).toBeLessThanOrEqual(32);
    });
  });

  test("User can change the number of events they want to see", ({
    given,
    when,
    then,
  }) => {
    given("The user is viewing a list of events", () => {
      AppWrapper = mount(<App />);
    });
    when(
      "The user enters a number in the “Number of Events” input field",
      () => {
        AppWrapper.find(NumberOfEvents).simulate("change", {
          target: { value: 1 },
        });
      }
    );
    then(
      "The number of events displayed should update to match the number entered by the user",
      () => {
        expect(AppWrapper.find(EventList)).toHaveLength(1);
      }
    );
  });
});
