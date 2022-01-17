import React from 'react';

import WishList from '../wishList/wishList';
import NavigationMenu from '../navigationMenu/NavigationMenu';

import './sideBar.css';

const SideBar = () => {
  return(
    <aside className='sideBar'>
      <NavigationMenu />
      <WishList />
    </aside>
  )
}

export default SideBar;