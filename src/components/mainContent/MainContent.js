import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDisplay } from '../../redux/sidebar/sidebarSelector';
import { toggleSidebar } from '../../redux/sidebar/sidebarActions';
import { Outlet } from 'react-router-dom';

import Header from '../header/Header';
import Backdrop from '../backdrop/Backdrop';

import './mainContent.css';

const Section = ({displaySidebar, toggleSidebar}) => {
  return(
    <div  className='content-area'>
      <div className='main-content'>
        { displaySidebar && <Backdrop onClick={toggleSidebar} /> }

        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <footer className='rodape'>
        <strong>Made with LOVE by Félix Pereira</strong>
      </footer>
    </div>

  )
};

const mapStateToProps = createStructuredSelector({
  displaySidebar: selectDisplay
});

const mapDispatchToProps = dispatch => ({
  toggleSidebar: () => dispatch(toggleSidebar())
});

export default connect(mapStateToProps, mapDispatchToProps)(Section);