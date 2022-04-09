import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectDisplay } from '../../redux/sidebar/sidebarSelector';
import { Container } from './sideBar-style.js';

import WishList  from '../wishList/wishList';
import NavigationMenu from '../navigationMenu/NavigationMenu';



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