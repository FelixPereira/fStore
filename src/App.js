import React from 'react';
import { Routes, Route } from 'react-router-dom';

import SectionOverview from './components/sectionOverview/SectionOverview';
import MainContent from './components/mainContent/MainContent';
import CartPage from './pages/cartPage/cartPage';
import HomePage from './pages/homePage/HomePage';
import ShopPage from './pages/shopPage/ShopPage';
// import ShopItems from './components/shopItems/shopItems';
import LoginSigninPage from './pages/login-signin/login-signin-page';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={ <HomePage /> } >
        <Route path='' element={ <MainContent /> }>
          <Route path='' element={ <SectionOverview /> } />
          <Route path='cartpage' element={ <CartPage /> } />
          <Route path='loja' element={ <ShopPage />} >
            {/* <Route path='' element={ <ShopItems /> } /> */}
            <Route path='' element={ <SectionOverview /> } />
            <Route path=':categoryUrl' element={ <SectionOverview /> } />
          </Route>
          <Route path='login' element={ <LoginSigninPage /> } />
        </Route>
      </Route>
    </Routes>
  )
};

export default App;