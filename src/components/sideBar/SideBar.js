import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import WishList from '../wishList/wishList';
import { selectDisplay } from '../../redux/sidebar/sidebarSelector';
import NavigationMenu from '../navigationMenu/NavigationMenu';
import './sideBar.css';

const SideBar = ({displaySidebar}) => {
  return(
    <aside className={`sideBar ${displaySidebar && 'sidebar--visible'}`}>
      <NavigationMenu />
      <WishList />
    </aside>
  );
};

const mapStateToProps = createStructuredSelector({
  displaySidebar: selectDisplay
});

export default connect(mapStateToProps)(SideBar);