import { metricSystem, imperialSystem } from "./units";

export const userInterface = (() => {
  const textInput = document.querySelector("#search");
  const searchBtn = document.querySelector("#search-btn");
  const weatherInfo = document.querySelector("#weather-info");
  const unitToggle = document.querySelector(".unit-toggle");
  const loader = document.querySelector(".spinner");

  const setEventListeners = (fn) => {
    searchBtn.addEventListener("click", fn);
    unitToggle.addEventListener("click", switchSystem);
    unitToggle.addEventListener("click", (e) =>
      clickSearchBtn(e, weatherInfo.classList.contains("active")),
    );
    textInput.addEventListener("keypress", (e) =>
      clickSearchBtn(e, e.key === "Enter"),
    );
  };

  const getUnit = () =>
    getActive(Array.from(unitToggle.children))?.getAttribute("id");

  const clickSearchBtn = (e, condition) => {
    if (condition) {
      e.preventDefault();
      searchBtn.click();
    }
  };

  const switchSystem = (e) => {
    if (
      !e ||
      !e.target ||
      !e.target.parentElement ||
      e.target.classList.contains("unit-toggle")
    )
      return;
    const parent = e.target.parentElement;
    Array.from(parent.children).forEach((child) =>
      child.classList.remove("active"),
    );
    e.target.classList.add("active");
  };

  const getActive = (array) => {
    if (!array || !Array.isArray(array) || array.length <= 0) return;
    return array.find((child) => child.classList.contains("active"));
  };

  const getLocation = () => textInput.value;
  const showWeatherInfos = (data) => {
    weatherInfo.replaceChildren();
    const unitSystem = getUnit() === "metric" ? metricSystem : imperialSystem;
    weatherInfo.classList.add("active");
    weatherInfo.append(...createInfoDivs(data, unitSystem));
  };

  const showError = () => {
    weatherInfo.replaceChildren();
    weatherInfo.classList.add("active");
    weatherInfo.append(document.createTextNode("No city found"));
  };

  const hideLoader = () => loader.classList.remove("active");
  const showLoader = () => {
    loader.classList.add("active");
    weatherInfo.replaceChildren();
  };

  const createInfoDivs = (data, unitSystem) => {
    const elements = [];
    for (const info in data) {
      const subdiv = document.createElement("div");
      subdiv.classList.add(info);
      const element = data[info].getElement({ info, unitSystem });
      subdiv.append(element);
      elements.push(subdiv);
    }
    return elements;
  };

  return {
    setEventListeners,
    getLocation,
    showWeatherInfos,
    showError,
    getUnit,
    showLoader,
    hideLoader,
  };
})();
