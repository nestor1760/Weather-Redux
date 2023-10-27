import React from 'react';
import './Loader.css'

const Loader = () => {
  return (
    <div className='container'>
      <h1 className='title-loader'>Welcome on my Weather App</h1>
      <div className = "centered">
	      <div className = "blob-1"></div>
	      <div className = "blob-2"></div>
      </div>  
    </div>
  )
}

export default Loader;
