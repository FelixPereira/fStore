import React from 'react';
import { Routes, Route } from 'react-router-dom';


import Section from './components/mainContent/MainContent';
import SectionOverview from './components/sectionOverview/SectionOverview';
import CollectionPage from './pages/collectionPage/CollectionPage';
import CartPage from './pages/cartPage/cartPage';
import HomePage from './pages/homePage/HomePage';
import ShopPage from './pages/shopPage/ShopPage';
import LoginSigninPage from './pages/login-signin/login-signin-page';
import SingleProductPage from './pages/singleProductPage/SingleProductPage';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element={ <Section /> }>
        <Route path='/' element={ <HomePage /> } />
        <Route path='cartpage' element={ <CartPage /> } />
        <Route path='loja' element={ <ShopPage />} >
          <Route path='' element={ <SectionOverview /> } />
          <Route path=':categoryUrl' element={ <CollectionPage /> } >
            <Route path=':productUrl' element={ <SingleProductPage /> } />
          </Route>
        </Route>
        <Route path='login' element={ <LoginSigninPage /> } />
      </Route>
    </Routes>
  )
};

export default App;