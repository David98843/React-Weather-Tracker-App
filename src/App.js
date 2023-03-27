import './bootstrap-4.0.0-dist/css/bootstrap.css'
import './icons.css'
import './App.css'
import Header from "./components/Header"
import WeatherInfo from './components/WeatherInfo'
import {useState, useEffect} from 'react'
import React from 'react'
import WeeklyForecast from './components/WeelyForecast'


const App = () => {

  const [weather, setWeather] = useState([])

  navigator.geolocation.getCurrentPosition(showPosition)

  function showPosition(position){
    const fetchData = () => {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '38bebc5830mshf6956d502a7ee44p158d09jsn12ca6a8e30b5',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
      };
      
      fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${position.coords.latitude},${position.coords.longitude}`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
    }
    fetchData()
  
  }

  // fetchData()


  // useEffect(() => {
  //   const getWeather = async() => {
  //     const dataFromServer = await fetchData()
  //     // setWeather(dataFromServer['current'])
  //   }
  //   getWeather()
  // }, [])



  return(
    <div className='body'>

      <Header Weather = {weather}/>

      <div className="cont">
        <div className='cont-child'>
          <WeatherInfo />
        </div>
        
        <div className='cont-child'>
          <WeeklyForecast />
        </div>
      </div>      
    </div>
  )
}

export default App