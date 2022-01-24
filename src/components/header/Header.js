import React from 'react';
import { ReactComponent as HumburgerMenu } from '../../assets/humburger-menu.svg';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';


import './header.css';

import SearchBar from '../searchBar/SearchBar';
import CartIcon from '../cart-icon/CartIcon';
import AvatarIcon from '../avatarIcon/AvatarIcon';
import CartDropdown from '../cartDropdown/CartDropdown';
import Icon from '../icon/icon';
import { selectDisplay } from '../../redux/cart/cartSelectors';

const Header = ({display}) => {
  return(
    <header className='header'>
      <div className='icon-container'>
        <HumburgerMenu className='icon' />
      </div>

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

const mapStateToProps = createStructuredSelector({
  display: selectDisplay
});


export default connect(mapStateToProps)(Header);