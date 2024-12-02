export const weatherservice = (() => {
  async function getJSONData(location) {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?IconSet=icons1&key=W8SRDE35NC9EZSAB2UEM3ZD9H`,
      );
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      return await response.json();
  }

  function processWeather(json) {
    if (!json || !(json instanceof Promise))
      throw new Error("Data error! Unexpected data format");
    return json
      .then((data) => {
        if (!data || !data.days || !data.days[0])
          throw new Error("Data error! Unexpected data format");
        const today = data.days[0];
        const weatherInfo = {
            conditions: today.description,
            precipitation: today.precipprob,
            location: data.resolvedAddress,
            icon: today.icon,  
            temperature: today.temp,
            direction: today.winddir,
            gust: today.windgust,
            windspeed: today.windspeed,
            sunrise: today.sunrise,
            sunset: today.sunset,
            uv: today.uvindex,
        };
        return weatherInfo;
      })
  }

  return { getJSONData, processWeather };
})();
