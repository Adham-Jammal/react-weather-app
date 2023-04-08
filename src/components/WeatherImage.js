import React from 'react';
import clear from '../assets/images/clear.png';
import rain from '../assets/images/rain.png';
import snow from '../assets/images/snow.png';
import clouds from '../assets/images/cloud.png';
import haze from '../assets/images/mist.png';

function WeatherImage(props) {
  let weatherImage = '';

  switch (props.weather.main) {
    case 'Clear':
      weatherImage = clear;
      break;

    case 'Rain':
      weatherImage = rain;
      break;

    case 'Snow':
      weatherImage = snow;
      break;

    case 'Clouds':
      weatherImage = clouds;
      break;

    case 'Mist':
      weatherImage = haze;
      break;

    default:
      weatherImage = '';
  }

  return (
    <img src={weatherImage} alt="weather-img" />
  );
}

export default WeatherImage;
