import React from 'react';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';

import './searchBar.css';

const SearchBar = () => {
  return(
    <div className='searchBar'>
      <SearchIcon className='searchIcon' />
      
      <input 
        className='searchInput'
        type='search'
        placeholder='O que deseja hoje?'/>
    </div>
  )
}

export default SearchBar;