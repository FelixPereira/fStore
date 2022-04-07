import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDisplay } from '../../redux/sidebar/sidebarSelector';
import { toggleSidebar } from '../../redux/sidebar/sidebarActions';
import { Outlet } from 'react-router-dom';

import Header from '../header/Header';
import Backdrop from '../backdrop/Backdrop';

import { 
  Container, 
  MainContent, 
  Rodape,
  RodapeText } from './mainContent-style.js';

  
const Section = ({displaySidebar, toggleSidebar}) => {
  return(
    <Container>
      <MainContent>
        { displaySidebar && <Backdrop onClick={toggleSidebar} /> }

        <Header />
        <main>
          <Outlet />
        </main>
      </MainContent>
      <Rodape>
        <RodapeText>Made with LOVE by Félix Pereira</RodapeText>
      </Rodape>
    </Container>

  )
};

const mapStateToProps = createStructuredSelector({
  displaySidebar: selectDisplay
});

const mapDispatchToProps = dispatch => ({
  toggleSidebar: () => dispatch(toggleSidebar())
});

export default connect(mapStateToProps, mapDispatchToProps)(Section);