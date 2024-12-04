class UnitHandler {
  constructor(system = {}) {
    this.system = system;
  }

  getUnit = (key) => this.system[key] || "";
  addUnit = (key, value) => (this.system[key] = value);
  formatUnit = (key, value) => `${value} ${this.getUnit(key)}`;
}

export const metricSystem = new UnitHandler({
  temperature: "°C",
  precipitation: "%",
  windspeed: "km/h",
});

export const imperialSystem = new UnitHandler({
  temperature: "°F",
  precipitation: "%",
  windspeed: "mph",
});
