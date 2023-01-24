import { loadFeature, defineFeature } from "jest-cucumber";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("An event element is collapsed by default", ({ given, when, then }) => {
    given("The user has opened the events page", () => {});
    when("The user views the list of events", () => {});
    then(
      "Each event should be displayed in a collapsed format, showing only basic information such as the event title and date",
      () => {}
    );
  });

  test("User can expand an event to see its detailsx", ({
    given,
    when,
    then,
  }) => {
    given("The user is viewing a list of events", () => {});
    when(
      "The user clicks on the 'Expand' or 'More Info' button for a specific event",
      () => {}
    );
    then(
      "The event should expand to reveal additional details such as location, description, ticket information, and etc.",
      () => {}
    );
  });

  test("User can collapse an event to hide its details", ({
    given,
    when,
    then,
  }) => {
    given("The user is viewing a list of events", async () => {});
    when(
      "The use clicks on the 'Collapse' or 'Less Info' button for a specific event",
      () => {}
    );
    then(
      "The event should collapse, hiding the additional details and returning to the basic information view",
      () => {}
    );
  });
});
