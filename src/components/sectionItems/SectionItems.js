import React from 'react';

import './sectionItems.css';

import Item from '../sectionItem/Item';
import PRODUCTS from '../../teste';



const SectionItems = () => {
  const products = PRODUCTS;

  return(
    <div className=''>
      {
        products.filter((product, idx) => idx < 2).map(({categoryName, items}, id) => (
          <div className='category-preview' key={id}>
            <div className='teste'>
              <h2 className='category-name'> {categoryName} </h2>
              <div className='navigators'>
                <span>Previus</span>
                <span>Next</span>
              </div>
            </div>
            <Item items={items} />
            <categoryDestaque items={items} />
          </div>
        ))
      }
    </div>
  )
}

export default SectionItems;