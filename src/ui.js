import { metricSystem, imperialSystem } from "./units";

export const userInterface = (() => {
    const textInput = document.querySelector("#search");
    const searchBtn = document.querySelector("#search-btn");
    const weatherInfo = document.querySelector("#weather-info");
    const unitToggle = document.querySelector(".unit-toggle");

    const setEventListeners = (fn) => {
        searchBtn.addEventListener("click", fn);
        unitToggle.addEventListener("click", switchSystem);
    }

    const getUnit = () => getActive(Array.from(unitToggle.children))?.getAttribute("id");

    const switchSystem = (e) => {
      if(!e || !e.target || !e.target.parentElement) return;
      const parent = e.target.parentElement;
      Array.from(parent.children).forEach(child => child.classList.remove("active"));
      e.target.classList.add("active");
    }

    const getActive = (array) => {
      if(!array || !Array.isArray(array) || array.length <= 0) return;
      return array.find(child => child.classList.contains("active"));
    }

    const getLocation = () => textInput.value;
    const showWeatherInfos = (data) => {
        weatherInfo.replaceChildren();
        const unitClass = getUnit() === "metric" ? metricSystem : imperialSystem;
        weatherInfo.classList.add("active")
        for (const info in data) {
          const subdiv = document.createElement("div");
          subdiv.classList.add(info);
            if(info === "icon") {
              const icon = document.createElement("img");
              icon.setAttribute("src", require(`./icons/weather-icon/${data[info]}.png`));
              subdiv.append(icon);
            }
            else {
              const subtext = document.createElement("p");
              subtext.append(document.createTextNode(unitClass.formatUnit(info, data[info])));
              subdiv.append(subtext);
            }
            weatherInfo.append(subdiv);
        }  
    }
    const showError = () => {
        weatherInfo.replaceChildren();
        weatherInfo.classList.add("active");
        weatherInfo.append(document.createTextNode("No city found"));  
    }

    return { setEventListeners, getLocation, showWeatherInfos, showError, getUnit };

})()