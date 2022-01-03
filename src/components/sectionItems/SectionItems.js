import React from 'react';
import { useState, useEffect } from 'react';

import './sectionItems.css';

import Item from '../sectionItem/Item';
import PRODUCTS from '../../teste';


const SectionItems = () => {
  const products = PRODUCTS;

  const [ marginLeft, setMarginLeft ] = useState(0);


  return(
    <div className='cp'>
      {
        products.filter((product, idx) => idx < 2).map(({categoryName, items}, id) => (
          <div className='category-preview' key={id}>
            <div className='teste'>
              <h2 className='category-name'> {categoryName} </h2>
            </div>
            <div style={{marginLeft: marginLeft}} className='products-list' >
              <Item items={items} />
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default SectionItems;