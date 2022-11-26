import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === `celsius`) {
    return (
      <div className="WeatherTemperature d-flex">
        <span className="temperature text-white">
          {Math.round(props.celsius)}
        </span>
        <span className="unit">°C</span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature d-flex">
        <span className="unit text-white">
          <a href="/" onClick={showCelsius}>
            °C |
          </a>
        </span>
      </div>
    );
  }
}
