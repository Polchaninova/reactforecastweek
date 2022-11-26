/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import WeatherForecastDay, { days } from "./Weather.ForecastDay";

import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    if (loaded) {
      setLoaded(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.coordinates]);

  function handleResponse(response) {
    // console.log(response.data);
    setForecast(listDays(response.data.list));
    setLoaded(true);
  }
  // console.log(props);

  if (loaded) {
    // console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (listForecast, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={listForecast} />
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
    // let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}

function listDays(list) {
  let currentDays = {};
  list.forEach((item) => {
    let day = days[new Date(Date.parse(item.dt_txt)).getDay()];
    if (!currentDays[day]) {
      currentDays[day] = {
        tempMax: item.main.temp_max,
        tempMin: item.main.temp_min,
        items: [item],
      };
    } else {
      currentDays[day] = {
        tempMax: Math.max(item.main.temp_max, currentDays[day].tempMax),
        tempMin: Math.min(item.main.temp_min, currentDays[day].tempMin),
        items: currentDays[day].items.concat(item),
      };
    }
  });
  return Object.keys(currentDays).map((day) => {
    let tempMax = Math.round(currentDays[day].tempMax);
    let tempMin = Math.round(currentDays[day].tempMin);
    let items = currentDays[day].items;
    let middleItem = items[Math.floor(items.length / 2)];
    let iconCode = middleItem.weather[0].icon;

    var iconUrl = getImageUrl(iconCode);
    return {
      day,
      iconCode,
      iconUrl,
      tempMin,
      tempMax,
    };
  });
}

function getImageUrl(iconCode) {
  return "http://openweathermap.org/img/w/" + iconCode + ".png";
}
