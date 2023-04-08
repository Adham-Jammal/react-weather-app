import axios from 'axios';
import React, { useState } from 'react';

const SearchBox = ({ weather, setWeather }) => {
  const [city, setCity] = useState('');
  
  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      handleSearch();
    }
  };
  
  const handleSearch = async () => {
    try {
      const apiKey = '0c47c1b7d63d5de893b1d1b6729c5236';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    
      const response = await axios.get(apiUrl);
      setWeather(response.data);
      document.querySelector('.container').classList= 'container active'
    } catch (error) {
      console.error(error);
      setWeather(null);
      document.querySelector('.container').classList = 'container error-active'
    }
  };
  
  return (
    <div className="search-box">
      <i className="fa-solid fa-location-dot"></i>
      <input
        type="text"
        placeholder="Enter your location"
        value={city}
        onChange={(event) => setCity(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className="fa-solid fa-magnifying-glass" onClick={handleSearch}></button>
    </div>
  );
};

export default SearchBox;
