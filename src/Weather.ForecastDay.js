import React from "react";
import WeatherIcons from "./WeatherIcons";

export let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.tempMax);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.tempMin);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    return days[day];
  }
  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcons code={props.data.iconCode} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}°
        </span>
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}°
        </span>
      </div>
    </div>
  );
}
