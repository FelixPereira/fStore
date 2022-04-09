import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import WishList  from '../wishList/wishList';
import { selectDisplay } from '../../redux/sidebar/sidebarSelector';

import NavigationMenu from '../navigationMenu/NavigationMenu';

import { Container } from './sideBar-style.js';


const SideBar = ({showSidebar}) => {
  return(
    <Container className={`${showSidebar && 'visible'}`}>
      <NavigationMenu />
      <WishList />
    </Container>
  )
}

const mapStateToProps = createStructuredSelector({
  showSidebar: selectDisplay
});

export default connect(mapStateToProps)(SideBar);