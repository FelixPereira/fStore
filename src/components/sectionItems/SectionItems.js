import React from 'react';
import { useState, useEffect } from 'react';

import './sectionItems.css';

import Item from '../sectionItem/Item';
import PRODUCTS from '../../teste';



const SectionItems = () => {
  const products = PRODUCTS;

  const [ marginLeft, setMarginLeft ] = useState(0);


  useEffect(() => {
    setInterval(() => {
      setMarginLeft(marginLeft - 400)
    }, 2000);
  });


  const handleLeftArrow = () =>{
    let x = marginLeft + 400;
    if(x > 0) {
      x = 0;
    }
    setMarginLeft(x);
  }

  const handleRightArrow = () =>{
    setMarginLeft(marginLeft -420);
  }

  return(
    <div className='cp'>
      {
        products.filter((product, idx) => idx < 2).map(({categoryName, items}, id) => (
          <div className='category-preview' key={id}>
            <div className='teste'>
              <h2 className='category-name'> {categoryName} </h2>
              <div className='navigators'>
                <span 
                  onClick={handleLeftArrow} 
                  style={{color: '#fff', marginRight: '20px', cursor: 'pointer'}}>Previus</span>
                <span 
                  onClick={handleRightArrow} 
                  style={{color: '#fff', cursor: 'pointer'}}>Next</span>
              </div>
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