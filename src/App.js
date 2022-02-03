import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/homePage/HomePage';

import './App.css';
import CartPage from './pages/cartPage/cartPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={ <HomePage /> } />
      <Route path='/cartpage' element={ <CartPage /> } />
    </Routes>

  )
}

export default App;
