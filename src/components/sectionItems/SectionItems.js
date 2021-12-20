import React from 'react';

import './sectionItems.css';

import Item from '../sectionItem/Item';
import PRODUCTS from '../../teste';

const SectionItems = () => {
  const products = PRODUCTS;

  return(
    <div className=''>
      {
        products.map(({categoryName, items}, id) => (
          <div className='category-preview' key={id}>
            <h2 className='category-name'> {categoryName} </h2>
            <Item items={items} />
          </div>
        ))
      }
    </div>
  )
}

export default SectionItems;