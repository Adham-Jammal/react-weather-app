import { useState } from 'react';
import './App.css';
import NotFound from './components/NotFound';
import SearchBox from './components/SearchBox';
import WeatherInfo from './components/WeatherInfo';
function App() {
  const [weather, setWeather] = useState(null);
  return (
    <div className="App">
      <div className="container fadeIn">
        <SearchBox weather={weather} setWeather={setWeather} />
        {weather ? (
          <WeatherInfo weather={weather} />
        ) : (
          <NotFound />
        )}
      </div>
    </div>
  );
}

export default App;
