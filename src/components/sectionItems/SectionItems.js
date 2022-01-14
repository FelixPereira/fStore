import React from 'react';
import { useState, useEffect } from 'react';

import './sectionItems.css';

import Item from '../sectionItem/Item';

const SectionItems = ({categoryName, items}) => {
  return(
    <div className='category-preview'>
      <div className='teste'>
        <h2 className='category-name'> {categoryName} </h2>
      </div>
      <div className='products-list' >
        {
          items.map(item => (
            <Item item={item} key={item.id}/>
          ))
        }
      </div>
    </div>
  )
}

export default SectionItems;