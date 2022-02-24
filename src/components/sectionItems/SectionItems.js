import React from 'react';
import { useNavigate } from 'react-router-dom';

import './sectionItems.css';

import Item from '../sectionItem/Item';

const SectionItems = ({categoryName, items}) => {
  const navigate = useNavigate();
  return(
    <div className='category-preview'>
      <div className='teste'>
        <h2 
          className='category-name'
          style={{cursor: 'pointer'}}
          onClick={() => navigate(`${categoryName.toLowerCase()}`)}
        > {categoryName} </h2>
      </div>
      <div className='products-list' >
        {
          items
          .filter((items, idx) => idx < 5 )
          .map(item => (
            <Item item={item} key={item.id}/>
          ))
        }
      </div>
    </div>
  )
}

export default SectionItems;