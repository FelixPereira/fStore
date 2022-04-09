import React from 'react';
//import { ReactComponent as SearchIcon } from '../../assets/search.svg';

import { Container, Input } from './searchBar-style';

const SearchBar = () => {
  return(
    <Container className='searchBar'>
      <Input type='search' placeholder='O que deseja hoje?'/>
    </Container>
  )
}

export default SearchBar;