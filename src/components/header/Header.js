import React from 'react';

import './header.css';

import SearchBar from '../searchBar/SearchBar';
import CartIcon from '../cart-icon/CartIcon';
import AvatarIcon from '../avatarIcon/AvatarIcon';

const Header = () => {
  return(
    <header className='header'>
      <SearchBar />
      <div className='header-icons'>
        <CartIcon />
        <AvatarIcon />
      </div>
    </header>
  )
}

export default Header;