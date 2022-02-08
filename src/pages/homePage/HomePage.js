import React from 'react';
import { Outlet } from 'react-router-dom';

import './homePage.css';

import SideBar from '../../components/sideBar/SideBar';


const HomePage = () => {
  return(
    <div className='homePage'>
      <SideBar />
      <Outlet />
    </div>
  )
}


export default HomePage;