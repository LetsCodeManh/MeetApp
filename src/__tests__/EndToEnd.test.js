import puppeteer from "puppeteer";

describe("show/hide an event details", () => {
  let browser;
  let page;
  beforeAll(async () => {
    jest.setTimeout(30000);
    browser = await puppeteer.launch({
      // headless: false,
      // slowMo: 250, // slow down by 250ms
      // ignoreDefaultArgs: ["--disable-extensions"], //ingonres default setting that causes timeout errors
    });
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    await page.waitForSelector(".event");
  });

  afterAll(() => {
    browser.close();
  });

  test("An event element is collapsed by default", async () => {
    const eventDetails = await page.$(".event .description");
    expect(eventDetails).toBeNull();
  });

  test("User can expand an event to see its details", async () => {
    const eventDetails = await page.$(".event .description");
    expect(eventDetails).toBeDefined();
  });

  test("User can collapse an event to hide its details", async () => {
    await page.click(".event .expand-collapse-buttons");
    const eventDetails = await page.$(".event .description");
    expect(eventDetails).toBeNull();
  });
});

describe("filter events by city", () => {
  let browser;
  let page;
  beforeAll(async () => {
    jest.setTimeout(30000);
    browser = await puppeteer.launch({
      // headless: false,
      // slowMo: 250, // slow down by 250ms
      // ignoreDefaultArgs: ["--disable-extensions"], //ingonres default setting that causes timeout errors
    });
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    await page.waitForSelector(".event");
  });

  afterAll(() => {
    browser.close();
  });

  test("When user hasn’t searched for a city, show upcoming events from all cities.", async () => {
    const eventList = await page.$(".EventList li");
    expect(eventList).toBeDefined();
  });

  test("User should see a list of suggestions when they search for a city", async () => {
    await page.type(".city", "Berlin")
    const suggestionList = await page.$(".CitySearch .suggestions")
    expect(suggestionList).toBeDefined();
  });

  test("User can select a city from the suggested list", async () => {
    await page.click(".suggestions li");
    const eventLocation = await page.$(".event .location")
    const locationText = await page.evaluate(details => details.textContent, eventLocation)
    expect(locationText).toContain("Berlin")
  });
});
