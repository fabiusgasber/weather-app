import "./styles.css";
import { userInterface } from "./ui";
import { weatherprocessor } from "./weather-processor";
import { weatherservice } from "./weatherservice";

const init = () => {
  userInterface.setEventListeners(fetchWeather);
}

const fetchWeather = () => {
  const location = userInterface.getLocation();
  const weather = weatherprocessor.processWeather(
    weatherservice.getJSONData(location),
  );
  weather
    .then((data) => {
      userInterface.showWeatherInfos(data);
    })
    .catch(() => {
      userInterface.showError();
    });
};

init();