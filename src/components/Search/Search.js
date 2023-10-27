import React from 'react';
import './Search.css'

const Search = ({city, setCity ,func}) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    func()
    setCity('')
  }

  return (
    <form
      onSubmit={handleSubmit} 
      className="search-container"
    >
        <input 
          value={city}
          onChange={e => setCity(e.target.value)}
          type="text" 
          className="search-input" 
          placeholder="Enter your search city..." 
          required
        />
        <button 
        type='submit'
          className="search-button"
        >
          Search
        </button>
    </form>
  )
}

export default Search;
