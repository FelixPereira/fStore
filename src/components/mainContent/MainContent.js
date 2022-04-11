import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectDisplay } from '../../redux/sidebar/sidebarSelector';
import { toggleSidebar } from '../../redux/sidebar/sidebarActions';
import { Outlet } from 'react-router-dom';

import Header from '../header/Header';
import Backdrop from '../backdrop/Backdrop';

import { 
  Container, 
  Wrapper,
  MainContent, 
  Rodape,
  RodapeText } from './mainContent-style.js';

  
const Section = () => {
  const dispatch = useDispatch();
  const displaySidebar = useSelector(selectDisplay);
  return(
    <Container>
      <Wrapper>
        { displaySidebar && <Backdrop onClick={() => dispatch(toggleSidebar())} /> }

        <Header />
        <MainContent>
          <Outlet />
        </MainContent>
      </Wrapper>
      <Rodape>
        <RodapeText>Made with LOVE by Félix Pereira</RodapeText>
      </Rodape>
    </Container>
  )
};

export default Section;