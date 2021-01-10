// import logo from './logo.svg';
import React, { useState } from 'react';

const requestManager = {
  baseUrl: process.env.REACT_APP_REQUEST_MANAGER_URL
};


function App() {
  // Get weather data
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      // GraphQL query to request manager service
      // Clear search box
      setQuery('')

    }

  }

  // Provide the date format for the app
  const dateBuilder = (_date) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[_date.getDay()];
    let date = _date.getDate();
    let month = months[_date.getMonth()];
    let year = _date.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  const dayAndNight = hours => {
    if (hours >= 7 && hours <= 17) {
      return "day";
    } else {
      return "night";
    }
  }

  // Background logic
  let backgroundToUse = "undefined";
  // clear, cloud, fog, rain, snow, wind, unbdefined
  if (weather === "clear") {
    backgroundToUse = "App clear " + dayAndNight(new Date().getHours());
  } else if (weather === "cloud") {
    backgroundToUse = "App cloud " + dayAndNight(new Date().getHours());
  } else if (weather === "fog") {
    backgroundToUse = "App fog " + dayAndNight(new Date().getHours());
  } else if (weather === "rain") {
    backgroundToUse = "App rain " + dayAndNight(new Date().getHours());
  } else if (weather === "snow") {
    backgroundToUse = "App snow " + dayAndNight(new Date().getHours());
  } else if (weather === "wind") {
    backgroundToUse = "App wind " + dayAndNight(new Date().getHours());
  } else {
    backgroundToUse = "undefined";
  }

  return (
    <div className={(backgroundToUse !== "undefined") ? backgroundToUse : 'App'}>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search for a city..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {/* Set an if condition to make sure that if the input coming from request is random, ignore it */}
        {(typeof weather.main != "undefined") ? (
          <div>
            <div className="location-box">
              <div className="location">
                {/* Replace with city name and country response from backend */}
                {weather.name}, {weather.sys.country}
              </div>
              <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
              <div className="temperature">
                {Math.round(weather.main.temp)}°c
              </div>
              <div className="weather-condition">
                {/* Replace with actual response from service */}
                {weather.weather[0].main}
              </div>
            </div>
          </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
