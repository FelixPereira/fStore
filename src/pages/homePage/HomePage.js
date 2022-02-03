import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './homePage.css';

import Section from '../../components/sectionPreview/Section';
import SideBar from '../../components/sideBar/SideBar';
import SectionPreview from '../../components/sectionPreview/SectionPreview';
import CartPage from '../cartPage/cartPage';

const HomePage = () => {
  return(
    <div className='homePage'>
re      <SideBar />
      <Routes>
        <Route path='/' element={<Section /> }>
          <Route path='' element={<SectionPreview />} />
          <Route path='/cartpage' element={<CartPage />} />
        </Route>
      </Routes>
    </div>
  )
}


export default HomePage;