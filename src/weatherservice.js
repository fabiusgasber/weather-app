export const weatherservice = (() => {
    async function getJSONData (location) {
    try {
  function processWeather(json) {
    if (!json || !(json instanceof Promise))
      throw new Error("Data error! Unexpected data format");
    return json
      .then((data) => {
        if (!data || !data.days || !data.days[0])
          throw new Error("Data error! Unexpected data format");
        const today = data.days[0];
        const weatherInfo = {
          temperature: {
            temp: today.temp,
            tempmax: today.tempmax,
            tempmin: today.tempmin,
            feelslike: today.feelslike,
          },
          wind: {
            winddir: today.winddir,
            windgust: today.windgust,
            windspeed: today.windspeed,
          },
          sun: {
            sunrise: today.sunrise,
            sunset: today.sunset,
            uv: today.uvindex,
          },
          conditions: today.conditions,
          precipprob: today.precipprob,
          icon: today.icon,
        };
        return weatherInfo;
      })
      .catch((e) => {
        console.error(e.message);
      });
  }

  return { getJSONData, processWeather };
})();
