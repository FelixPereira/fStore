import React from 'react';
import { ReactComponent as HumburgerMenu } from '../../assets/humburger-menu.svg';
import { ReactComponent as AvatarIcon } from '../../assets/user.svg';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDisplay } from '../../redux/cart/cartSelectors';

import './header.css';

import SearchBar from '../searchBar/SearchBar';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cartDropdown/CartDropdown';


const Header = ({display}) => {
  return(
    <header className='header'>
      <div className='humburger-icon'>
        <div className='icon-container'>
          <HumburgerMenu className='icon' />
        </div>
      </div>

      <SearchBar />

      <div className='rightside-icons'>
        <CartIcon />
        <div className='icon-container'>
          <AvatarIcon className='icon' />
        </div>
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