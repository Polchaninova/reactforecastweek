import React, { useEffect, useState } from "react";
// import WeatherSearch from "./WeatherSearch";
import WeatherInfo from "./WeatherInfo";

import "./weather.css";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setweatherData] = useState({ ready: false });

  function handleResponse(response) {
    setweatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    });
    // setReady(true);
  }

  function search() {
    //city
    const apiKey = `12b765e58ad1df7247a7dd8bf64421e7`;
    // let city = "Kharkiv";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(search, []);

  function handleSubmit(event) {
    event.preventDefault();
    search();
    // search for a city
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function retrievePosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let units = "metric";
    let apiKey = "12b765e58ad1df7247a7dd8bf64421e7";
    let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
    let apiUrl = `${apiEndpoint}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(retrievePosition);
  }

  if (weatherData.ready) {
    return (
      <>
        <div className="Weather">
          <div className="container">
            <nav className="navbar navbar-light">
              <button
                className="navbar-brand btn text-white"
                id="navbar-kh"
                onClick={(e) => {
                  setCity("Kharkiv");
                  handleSubmit(e, "Kharkiv");
                }}
              >
                Kharkiv
              </button>
              <button
                className="navbar-brand btn text-white"
                id="navbar-lv"
                onClick={(e) => {
                  setCity("Lviv");
                  handleSubmit(e);
                }}
              >
                Lviv
              </button>
              <button
                className="navbar-brand btn text-white"
                id="navbar-od"
                onClick={(e) => {
                  setCity("Odessa");
                  handleSubmit(e, "Odessa");
                }}
              >
                Odessa
              </button>
              <button
                className="navbar-brand btn text-white"
                id="navbar-ky"
                onClick={(e) => {
                  setCity("Kyiv");
                  handleSubmit(e, "Kyiv");
                }}
              >
                Kyiv
              </button>
            </nav>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-6">
                <input
                  type="search"
                  placeholder="Enter a city.."
                  className="form-control"
                  autoFocus="on"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-primary w-100"
                />
              </div>
              <div className="col-3">
                <button
                  className="btn btn-success w-100"
                  type="button"
                  onClick={getCurrentPosition}
                  id="current-location-button"
                >
                  Current
                </button>
              </div>
            </div>
          </form>

          <WeatherInfo data={weatherData} />
          <WeatherForecast coordinates={weatherData.coordinates} />
        </div>
      </>
    );
  } else {
    return "Loading...";
  }
}
