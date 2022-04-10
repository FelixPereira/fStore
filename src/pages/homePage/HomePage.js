import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './homePage-style';
import SideBar from '../../components/sideBar/SideBar';


const HomePage = () => {
  return(
    <Container>
      <SideBar />
      <Outlet />
    </Container>
  )
};

export default HomePage;