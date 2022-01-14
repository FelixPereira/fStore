import React from 'react';

import './searchBar.css';

const SearchBar = () => {
  return(
    <div className='searchBar'>
      <span className='searchIcon'>O</span>
      <input 
        className='searchInput'
        type='search'
        placeholder='O que deseja hoje?'/>
    </div>
  )
}

export default SearchBar;