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
      for (const info in data) {
        if (typeof data[info] === "object" && data[info] !== null) {
          const div = document.createElement("div");
          div.classList.add(info);
          for (const subinfo in data[info]) {
            const subdiv = document.createElement("div");
            const subtext = document.createElement("p");
            subtext.append(document.createTextNode(data[info][subinfo]));
            subdiv.append(subtext);
            subdiv.classList.add(subinfo);
            div.append(subdiv);
          }
          weatherInfo.append(div);
        } else {
          const subdiv = document.createElement("div");
          const subtext = document.createElement("p");
          subtext.append(document.createTextNode(data[info]));
          subdiv.append(subtext);
          subdiv.classList.add(info);
          weatherInfo.append(subdiv);
        }
      }
    })
    .catch((error) => {
      weatherInfo.replaceChildren();
      weatherInfo.append(document.createTextNode("No city found"));
      console.error(error.message);
    });
};

searchBtn.addEventListener("click", fetchWeather);
