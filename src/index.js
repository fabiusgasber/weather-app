import "./styles.css";
import { userInterface } from "./ui";
import { weatherprocessor } from "./weather-processor";
import { weatherservice } from "./weatherservice";

const init = () => {
  userInterface.setEventListeners(fetchWeather);
}

const fetchWeather = () => {
  userInterface.showLoader();
  const location = userInterface.getLocation();
  const unitSystem = userInterface.getUnit();
  const weather = weatherprocessor.processWeather(
    weatherservice.getJSONData(location, unitSystem),
  );
  weather
    .then((data) => {
      userInterface.showWeatherInfos(data);
    })
    .catch(() => {
      userInterface.showError();
    })
    .finally(() => {
      userInterface.hideLoader()
    });
};

init();