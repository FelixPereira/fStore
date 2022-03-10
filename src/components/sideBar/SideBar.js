import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import WishList  from '../wishList/wishList';
import { selectDisplay } from '../../redux/sidebar/sidebarSelector';

import NavigationMenu from '../navigationMenu/NavigationMenu';

import './sideBar.css';


const SideBar = ({showSidebar}) => {
  return(
    <aside className={`sideBar ${showSidebar && 'sidebar--visible'}`}>
      <NavigationMenu />
      <WishList />
    </aside>
  )
}

const mapStateToProps = createStructuredSelector({
  showSidebar: selectDisplay
});

export default connect(mapStateToProps)(SideBar);