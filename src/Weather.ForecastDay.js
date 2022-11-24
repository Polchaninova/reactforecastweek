import React from "react";
import WeatherIcons from "./WeatherIcons";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.mix);
    return `${temperature}°`;
  }
  function day{
    
  }
  return (
    <div>
      <div className="WeatherForecast-day">{props.data.dt}</div>
      <WeatherIcons code={props.data.weather[0].icon} size={36} />
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
