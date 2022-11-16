import React from "react";
import "./weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Wednesday 07:00</li>
        <li>Nostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
            alt="Nostly Cloudy"
          />
          4°C
        </div>
        <div className="col-6">
          <ul>
            <li>Preciptation: 15%</li>
            <li>Humidity 59%</li>
            <li>Wind WNW 14 mph</li>
          </ul>
        </div>
      </div>

      <footer>
        This project was coded by Math Delac and is open-sourced on GitHub
        GitHub
      </footer>
    </div>
  );
}
