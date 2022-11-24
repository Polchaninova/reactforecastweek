import React, { useState } from "react";
import WeatherForecastDay from "./Weather.ForecastDay";

import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    // console.log(response.data);
    setForecast();
    setLoaded(true);
  }
  // console.log(props);

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (list, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={list} />
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = `12b765e58ad1df7247a7dd8bf64421e7`;
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let units = `metric`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
