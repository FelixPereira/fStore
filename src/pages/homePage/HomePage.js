import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './homePage-style';
import Slide from '../../components/slide/Slide';
import SectionOverview from '../../components/sectionOverview/SectionOverview';


const HomePage = () => {
  return(
    <Container>
      <Slide />
      <SectionOverview />
    </Container>
  )
};

export default HomePage;