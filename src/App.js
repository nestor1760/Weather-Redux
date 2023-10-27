import React, { useState, useEffect } from 'react';
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { dataApiFunc } from './API/dataApi';
import Loader from './components/Loader/Loader';
import WeatherCard from './components/WeatherCard/WeatherCard';
import Search from './components/Search/Search';
import ErrorCard from './components/ErrorCard.js/ErrorCard';

const App = () => {
  const [city, setCity] = useState('')
  
  const dispatch = useDispatch()
  const {data, loading, error} = useSelector(state => state.weather)
 
  useEffect(() => {
    setTimeout(() => {
      getDataFunc()
    }, 1000)
  }, [dispatch])

  const getDataFunc = () => {
    dispatch(dataApiFunc(city))
  }

  if(loading) {
    return <Loader />
  }

  return (
    <div className='App'>
        <Search city={city} setCity={setCity} func={getDataFunc}/>
        {(error)
          ?
            <ErrorCard/>
          :
            <WeatherCard data={data}/>
        }
    </div>
  )
}

export default App;
