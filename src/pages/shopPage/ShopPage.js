import React from 'react';
import { Outlet } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import { selectShopProducts } from '../../redux/shop/shopSelector';

const ShopPage = () => {
  return(
    <Outlet />
  )
};


export default ShopPage;