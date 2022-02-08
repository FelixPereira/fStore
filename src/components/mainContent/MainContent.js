import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDisplay } from '../../redux/sidebar/sidebarSelector';
import { toggleSidebar } from '../../redux/sidebar/sidebarActions';
import { Outlet } from 'react-router-dom';

import './sectionPreview.css';

import Header from '../header/Header';
import Backdrop from '../backdrop/backdrop';


const Section = ({displaySidebar, toggleSidebar}) => {
  return(
    <main className='sectionsPreview'>
      { displaySidebar 
        ? <Backdrop onClick={toggleSidebar} />
        : ''}
      <Header />
      <Outlet />
    </main>
  )
};

const mapStateToProps = createStructuredSelector({
  displaySidebar: selectDisplay
});

const mapDispatchToProps = dispatch => ({
  toggleSidebar: () => dispatch(toggleSidebar())
});

export default connect(mapStateToProps, mapDispatchToProps)(Section);