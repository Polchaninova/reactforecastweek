import React from "react";
import WeatherIcons from "./WeatherIcons";
import "./WeatherForecast.css";

export let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.tempMax);
    return `${temperature}`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.tempMin);
    return `${temperature}`;
  }
  return (
    <div className="down-next-day">
      <div className="WeatherForecast-day">{props.data.day}</div>
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
