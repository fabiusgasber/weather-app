import "./styles.css";
import { weatherservice } from "./weatherservice";

const textInput = document.querySelector("#search");
const searchBtn = document.querySelector("#search-btn");
const weatherInfo = document.querySelector("#weather-info");

const fetchWeather = () => {
  const location = textInput.value;
  const weather = weatherservice.processWeather(
    weatherservice.getJSONData(location),
  );
  weather
    .then((data) => {
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
    })
    .catch((error) => {
      weatherInfo.replaceChildren();
      weatherInfo.append(document.createTextNode("No city found"));
      console.error(error.message);
    });
};

searchBtn.addEventListener("click", fetchWeather);
