import { mockData } from "./MockData/mockData";
import axios from "axios";
import NProgress from "nprogress";

const getToken = async (code) => {
  try {
    const encodeCode = encodeURIComponent(code);
    const response = await fetch(
      `https://oviki6w0ab.execute-api.eu-central-1.amazonaws.com/dev/api/token/${encodeCode}`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const { access_token } = await response.json();
    access_token && localStorage.setItem("access_token", access_token);
    return access_token;
  } catch (error) {
    error.json();
  }
};

const checkToken = async (accessToken) => {
  const result = await fetch(
    `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
  )
    .then((res) => res.json())
    .catch((error) => error.json());

  return result;
};

const removeQuery = () => {
  if (window.history.pushState && window.location.pathname) {
    var newUrl =
      window.location.protocol +
      "//" +
      window.location.host +
      window.location.pathname;
    window.history.pushState("", "", newUrl);
  } else {
    newUrl = window.location.protocol + "//" + window.location.host;
    window.history.pushState("", "", newUrl);
  }
};

export const getAccessToken = async () => {
  const accessToken = localStorage.getItem("access_token");
  const tokenCheck = accessToken && (await checkToken(accessToken));

  if (!accessToken || tokenCheck.error) {
    await localStorage.removeItem("access_token");
    const searchParams = new URLSearchParams(window.location.search);
    const code = await searchParams.get("code");
    if (!code) {
      const results = await axios.get(
        "https://oviki6w0ab.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url"
      );
      const { authUrl } = results.data;
      return (window.location.href = authUrl);
    }
    return code && getToken(code);
  }
  return accessToken;
};

export const getEvents = async () => {
  NProgress.start();

  if (window.location.href.indexOf("localhost") > -1) {
    NProgress.done();
    return mockData;
  }

  if (!navigator.onLine) {
    const data = localStorage.getItem("lastEvents");
    NProgress.done();
    return data ? JSON.parse(data) : [];
  }

  const token = await getAccessToken();

  if (token) {
    removeQuery();
    const url = `https://oviki6w0ab.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/${token}`;

    try {
      const response = await axios.get(url);

      // Save events
      let events = await response.data.events;

      // Save events to local storage for use when offline
      localStorage.setItem("lastEvents", JSON.stringify(events));

      // Save location data from events
      let locations = extractLocations(events);
      localStorage.setItem("locations", JSON.stringify(locations));

      NProgress.done();

      return events;
    } catch (error) {
      NProgress.done();
      console.error(error.response);
    }
  }
};

export const extractLocations = (events) => {
  let extractLocations = events.map((event) => event.location);
  let locations = [...new Set(extractLocations)];
  return locations;
};
