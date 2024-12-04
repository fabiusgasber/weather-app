export const weatherprocessor = (() => {
  const processWeather = (json) => {
    if (!json || !(json instanceof Promise))
      throw new Error("Data error! Unexpected data format");
    return json.then((data) => {
      if (!data || !data.days || !data.days[0])
        throw new Error("Data error! Unexpected data format");
      const today = data.days[0];
      const weatherInfo = {
        conditions: today.description,
        precipitation: today.precipprob,
        location: data.resolvedAddress,
        icon: today.icon,
        temperature: today.temp,
        windspeed: today.windspeed,
        sunrise: today.sunrise,
        sunset: today.sunset,
        uv: today.uvindex,
      };
      return weatherInfo;
    });
  };

  return { processWeather };
})();
