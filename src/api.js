import axios from "axios";
import nProgress from "nprogress";
import { mockData } from "./MockData/mock-data";

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
      const { authUrl } = results.mockData;
      return (window.location.href = authUrl);
    }
    return code && getToken(code);
  }
  return accessToken;
};

export const extractLocations = (events) => {
  let extractLocations = events.map((event) => event.location);
  let locations = [...new Set(extractLocations)];
  return locations;
};

export const checkToken = async (accessToken) => {
  const result = await fetch(
    `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
  )
    .then((res) => res.json())
    .catch((error) => error.json());

  return result;
};

export const removeQuery = () => {
  if (window.history.pushState && window.location.pathname) {
    let newUrl =
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

export const getToken = async (code) => {
  try {
    const encodeCode = encodeURIComponent(code);
    const response = await fetch(
      "https://oviki6w0ab.execute-api.eu-central-1.amazonaws.com/dev/api/token" +
        "/" +
        encodeCode
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const { access_token } = await response.json();
    access_token && localStorage.setItem("access_token", access_token);
  } catch (error) {
    error.json();
  }
};

export const getEvents = async () => {
  nProgress.start();

  if (window.location.href.startsWith("http://localhost")) {
    nProgress.done();
    return mockData;
  }

  const token = await getAccessToken();

  if (token) {
    removeQuery();
    const url =
      "https://oviki6w0ab.execute-api.eu-central-1.amazonaws.com/dev/api/get-events" +
      "/" +
      token;
    const result = await axios.get(url);
    if (result.data) {
      let locations = extractLocations(result.data.events);
      localStorage.setItem("lastEvents", JSON.stringify(result.data));
      localStorage.setItem("locations", JSON.stringify(locations));
    }
    nProgress.done();
    return result.data.events;
  }

  return mockData;
};
