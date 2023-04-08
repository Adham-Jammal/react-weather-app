import React from 'react'
import WeatherImage from './WeatherImage'

const WeatherInfo = ({weather}) => {
    const kelvinToCelsius = (kelvin) => {
        const celsius = kelvin - 273.15;
        return celsius.toFixed(2);
      }
  return (
    <>
    <div className="weather-box fadeIn">
      <WeatherImage weather={weather.weather[0]} />
      <p className="temperature">{parseInt(kelvinToCelsius(weather.main.temp))}<span>°C</span></p>
      <p className="description">{weather.weather[0].description}</p>
    </div>

    <div className="weather-details fadeIn">
      <div className="humidity">
        <i className="fa-solid fa-water"></i>
        <div className="text">
          <span>{weather.main.humidity}%</span>
          <p>Humidity</p>
        </div>
      </div>
      <div className="wind">
        <i className="fa-solid fa-wind"></i>
        <div className="text">
          <span>{weather.wind.speed}m/s</span>
          <p>Wind Speed</p>
        </div>
      </div>
    </div>
  </>
  )
}

export default WeatherInfo