import React from 'react';
import { createSelector } from 'reselect';

import './homePage.css';

import SectionPreview from '../../components/sectionPreview/SectionPreview';

const HomePage = ({cart, addItem, setShipping, subtotal}) => {
  return(
    <div className='homePage'>
      <div>#SideBar</div>
     
    <SectionPreview />  
    </div>
  )
}

const calcSubtotal = createSelector(
  state => state.items,
  items => {
    console.log('Me chamaram');
    return items.reduce((subTotal, item) => subTotal + item.price, 0)
  }
); 


export default HomePage;