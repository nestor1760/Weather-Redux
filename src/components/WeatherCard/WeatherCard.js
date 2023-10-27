import React from 'react';
import style from './Weather.module.css'

const WeatherCard = ({data}) => {

  return (
    <div className={style.cardContainer}>
      <div className={style.weatherBody}>
        <div className={style.icon}>
            <img
                alt='Weather icon'
                src={`https://openweathermap.org/img/w/${data?.weather?.[0].icon}.png`}
            />
        </div> 
        <div className={style.city}>
          <h1 className={style.city}>{Math.ceil(data?.main?.temp)}<span style={{fontSize: '28px', margin: '0 20px 0 5px'}}>&deg;C</span></h1>
        </div>      
        <div className={style.bodyCity}>
            <h1 className={style.city}>{data?.name}</h1>
        </div>
      </div>
      <div className={style.bodyInfo}>
        <div className={style.bodyInfoItem}>
            <p>{Math.ceil(data?.main?.temp_min)}&deg;C / {Math.ceil(data?.main?.temp_max)}&deg;C</p>
            <p>low high</p>
        </div>
        <div className={style.bodyInfoItem}>
            <p>{Math.ceil(data?.main?.feels_like)}&deg;C</p>
            <p>feels like</p>
        </div>
        <div className={style.bodyInfoItem}>
            <p>{data?.main?.humidity} %</p>
            <p>humidity</p>
        </div>
        <div className={style.bodyInfoItem}>
            <p>{data?.wind?.speed} m/s</p>
            <p>wind speed</p>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard;
