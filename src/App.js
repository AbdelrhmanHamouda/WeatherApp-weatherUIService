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
  return (
    <div className="App">
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
        <div className="location-box">
          <div className="location">City name and location info</div>
          <div className="date">Date info</div>
        </div>
        <div className="weather-box">
          <div className="temperature">11°c</div>
          <div className="weather-condition">Sunny</div>
        </div>
      </main>
    </div>
  );
}

export default App;
