import React from 'react';
import { Routes, Route } from 'react-router-dom';

import SectionPreview from './components/sectionPreview/SectionPreview';
import SectionOverview from './components/sectionOverview/SectionOverview';
import MainContent from './components/mainContent/MainContent';
import CartPage from './pages/cartPage/cartPage';
import ShopPage from './pages/shopPage/ShopPage';
import HomePage from './pages/homePage/HomePage';

import { useParams } from 'react-router-dom';

import './App.css';

function App() {
  const params = useParams();

  return (
    <Routes>
      <Route path='/' element={ <HomePage /> } >
        <Route path='' element={ <MainContent /> }>
          <Route path='' element={ <SectionPreview /> } />
          <Route path='cartpage' element={ <CartPage /> } />
          <Route path='loja' element={ <ShopPage /> } />
            
          <Route path='loja/:categoryUrl' element={ <SectionOverview params={params} name='felix' /> } />

          <Route path='contacto' element={ <CartPage /> } />
          <Route path='signin' element={ <CartPage /> } />
        </Route>
      </Route>
    </Routes>
  )
};

export default App;