import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("When user hasn’t specified a number, 32 is the default number", ({
    given,
    when,
    then,
  }) => {
    given("The user has opened the events page", () => {});
    when("The user views the list of events", () => {});
    then("32 events should be displayed by default", () => {});
  });

  test("User can change the number of events they want to see", ({
    given,
    when,
    then,
    and
  }) => {
    given("The user is viewing a list of events", () => {});
    when(
      "The user enters a number in the “Number of Events” input field",
      () => {}
    );
    then(
      "The number of events displayed should update to match the number entered by the user",
      () => {}
    );
    and(
      "The max number of events that can displayed is 100, if user enter more than 100, it will only display 100 events not more.",
      () => {}
    );
  });
});
