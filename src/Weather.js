import React, { useState } from "react";

import "./weather.css";
import axios from "axios";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setweatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setweatherData({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: "Today 11:00",
      wind: response.data.wind.speed,
      city: response.data.name,
      description: "response.data.weather[0].description",
      iconUrl: `https://ssl.gstatic.com/onebox/weather/64/cloudy.png`,
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="d-flex">
              <img src={weatherData.iconUrl} alt={weatherData.description} />
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="unit">°C |</span>
              <span className="unit">°F</span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity {weatherData.humidity}</li>
              <li>Wind:{weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = `12b765e58ad1df7247a7dd8bf64421e7`;
    let city = "Kharkiv";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
