export const weatherprocessor = (() => {
  const processWeather = (json) => {
    if (!json || !(json instanceof Promise))
      throw new Error("Data error! Unexpected data format");
    return json.then((data) => {
      if (!data || !data.days || !data.days[0])
        throw new Error("Data error! Unexpected data format");
      const today = data.days[0];
      const weatherInfo = {
        conditions: new TextInfo(today.description),
        precipitation: new UnitInfo(today.precipprob),
        location: new TextInfo(data.resolvedAddress),
        icon: new Icon(today.icon),
        temperature: new UnitInfo(today.temp),
        windspeed: new UnitInfo(today.windspeed),
        sunrise: new SunInfo(today.sunrise),
        sunset: new SunInfo(today.sunset),
        uv: new TextInfo(today.uvindex),
      };
      return weatherInfo;
    });
  };

  return { processWeather };
})();

class Icon {
  static basePath = "./icons/weather-icon/";

  constructor(iconName) {
    this.iconName = iconName;
  }

  getElement() {
    try {
      const icon = document.createElement("img");
      icon.setAttribute(
        "src",
        require(`${Icon.basePath}${this.iconName}.png`),
      );
      return icon;  
    }
    catch (error){
      console.error(new Error(error.message));
    }
  }
}

class SunInfo {
  constructor(time) {
    this.time = time;
  }

  getElement() {
    const timeText = document.createElement("p");
    timeText.append(
      document.createTextNode(
        this.time.slice(0, this.time.lastIndexOf(":")), // remove seconds from time
      ),
    );
    return timeText;
  }
}

class TextInfo {
  constructor(description) {
    this.description = description;
  }

  getElement() {
    const subtext = document.createElement("p");
    subtext.append(document.createTextNode(this.description));
    return subtext;
  }
}

class UnitInfo {
  constructor(description) {
    this.description = description;
  }

  getElement({ unitSystem, info }) {
    const subtext = document.createElement("p");
    subtext.append(
      document.createTextNode(unitSystem.formatUnit(info, this.description)),
    );
    return subtext;
  }
}

