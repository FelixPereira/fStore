import React from 'react';
import { ReactComponent as HumburgerMenu } from '../../assets/humburger-menu.svg';
// import { ReactComponent as CloseMenu } from '../../assets/cross.svg';
import { ReactComponent as AvatarIcon } from '../../assets/user.svg';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDisplay } from '../../redux/cart/cartSelectors';
import { toggleSidebar } from '../../redux/sidebar/sidebarActions';
import { useNavigate } from 'react-router-dom';

import './header.css';

import SearchBar from '../searchBar/SearchBar';
import CartIcon from '../cartIcon/CartIcon';
import CartDropdown from '../cartDropdown/CartDropdown';
import IconContainer from '../icon/Icon';


const Header = ({showSidebar, toggleSidebar}) => {
  const navigate = useNavigate();
  return(
    <header className='header'>
      <div className='humburger-icon' onClick={toggleSidebar}>
        <IconContainer>
          <HumburgerMenu className='icon' />
        </IconContainer>
      </div>

      <SearchBar />

      <div className='rightside-icons'>
        <CartIcon />
        <IconContainer 
          onClick={() => navigate('login')}>
          <AvatarIcon className='icon' />
        </IconContainer>
        {
          showSidebar ? <CartDropdown /> : ''
        }
      </div>
    </header>
  )
}

const mapStateToProps = createStructuredSelector({
  showSidebar: selectDisplay
});

const mapDispatchToProps = dispatch => ({
  toggleSidebar: () => dispatch(toggleSidebar())
});


export default connect(mapStateToProps, mapDispatchToProps)(Header);