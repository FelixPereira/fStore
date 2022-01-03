import React from 'react';

import './header.css';

import SearchBar from '../searchBar/SearchBar';
import CartIcon from '../cart-icon/CartIcon';
import AvatarIcon from '../avatarIcon/AvatarIcon';
import CartDropdown from '../cartDropdown/CartDropdown';

const Header = () => {
  return(
    <header className='header'>
      <SearchBar />
      <div className='header-icons'>
        <CartIcon />
        <AvatarIcon />
        <CartDropdown />
      </div>
    </header>
  )
}

export default Header;