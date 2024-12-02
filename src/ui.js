export const userInterface = (() => {
    const textInput = document.querySelector("#search");
    const searchBtn = document.querySelector("#search-btn");
    const weatherInfo = document.querySelector("#weather-info");

    const setEventListeners = (fn) => {
        searchBtn.addEventListener("click", fn);
    }

    const getLocation = () => textInput.value;
    const showWeatherInfos = (data) => {
        weatherInfo.replaceChildren();
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
              subtext.append(document.createTextNode(data[info]));  
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

    return { setEventListeners, getLocation, showWeatherInfos, showError };

})()