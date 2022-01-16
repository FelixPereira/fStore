import React from 'react';

import WishList from '../wishList/wishList';

import './sideBar.css';

const SideBar = () => {
  return(
    <aside className='sideBar'> 
      <WishList />
    </aside>
  )
}

export default SideBar;