import React, { useState } from 'react';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const API_KEY = "c9daf7ccc4a8bfb7ae67296215b8acc7";
  const base = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${API_KEY}`;


  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
      "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let month = months[d.getMonth()];
    let date = d.getDate();
    let year = d.getFullYear();
    return `${day}, ${date} ${month} ${year}`;
  }

  //instead of building a function for date we can use slicing also.
  // let date = String(new window.Date());
  // date = date.slice(0, 15);

  const search = evt => {
    if (evt.key === 'Enter') {
      fetch(base).then(res => res.json()).then(result => {
        setQuery('');
        setWeather(result);
        console.log(result);
      });
    }
  }
  return (
    <div className= { (typeof weather.main != "undefined") ? (weather.main.temp >16) ? "App" : "App cold" : "App"}>
      <main className='search-box'>
        <h1>Weather App</h1>
        <input
          className='search-field'
          type='text'
          placeholder='Search for place..'
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyPress={search}
        />

        {(typeof weather.main != "undefined") ? (
          <div>
            <div className='location-box'>
              <div className='location'>{weather.name}, {weather.sys.country}</div>
              <div className='date'>{dateBuilder(new Date())}</div>
              {/* <div className='date'>{date}</div> */}
              {/* by using the slicing approach */}
            </div>
            <div className='weather-box'>
              <div className='temperature'>{Math.round(weather.main.temp)}°C</div>
              <div className='weather'>{weather.weather[0].main}</div>
            </div>
          </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
