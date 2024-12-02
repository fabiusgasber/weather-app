export const weatherservice = (() => {

  const BASE_URL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
  const API_KEY = "W8SRDE35NC9EZSAB2UEM3ZD9H";
  
  async function getJSONData(location) {
      const response = await fetch(
        `${BASE_URL}${location}?IconSet=icons1&key=${API_KEY}`,
      );
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      return await response.json();
  }

  return { getJSONData };
})();
