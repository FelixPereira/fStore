import React from 'react';

import './homePage.css';

import SectionPreview from '../../components/sectionPreview/SectionPreview';
import SideBar from '../../components/sideBar/SideBar';

const HomePage = () => {
  return(
    <div className='homePage'>
      <SideBar />
      <SectionPreview />  
    </div>
  )
}


export default HomePage;