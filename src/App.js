// import logo from './logo.svg';
import React from 'react';


function App() {
  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search for a city..."
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
