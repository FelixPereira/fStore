import React from 'react';
import { connect } from 'react-redux';

import './header.css';

import SearchBar from '../searchBar/SearchBar';
import CartIcon from '../cart-icon/CartIcon';
import AvatarIcon from '../avatarIcon/AvatarIcon';
import CartDropdown from '../cartDropdown/CartDropdown';

const Header = ({display}) => {
  return(
    <header className='header'>
      <SearchBar />
      <div className='header-icons'>
        <CartIcon />
        <AvatarIcon />
        {
          display ? <CartDropdown /> : ''
        }
      </div>
    </header>
  )
}

const mapStateToProps = ({cart: {display}}) => ({
  display: display
});


export default connect(mapStateToProps)(Header);