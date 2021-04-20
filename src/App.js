import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import Weather from './components/Weather';

function App() {
  const [input, setInput] = useState('');
  const [search, setSearch] = useState('');
  const [weather, setWeather] = useState({});
  const [isLoading, setIsloading] = useState(true);

  const apiKey = 'e6b9b998b2255b5a9803b5dc3fa7e273';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}`;

  useEffect(()=>{
    if (isLoading) {
      setIsloading(false);
    } else {
      getWeather();
    }
  }, [search])


  const getWeather = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.cod === "404") { 
        alert("City not found. Please try again")
      }
      console.log(data)
      setWeather(data);
    } catch (error) {
    }
  }

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(input);
    if (input === '') {
      alert("Please enter a City");
    }
    setInput('');
  }


  return (
    <div className="container">
      <h1>Weather App</h1>
      <div className="content">
      <Form input={input} setInput={setInput} handleSearch={handleSearch}/>
      {weather.main && (
        <Weather
          city={weather.name}
          temp={weather.main.temp}
          desc={weather.weather[0].description}
          icon={weather.weather[0].icon}
          background={weather.weather[0].main}
        />
      )}
      </div>
    </div>
  );
}

export default App;
