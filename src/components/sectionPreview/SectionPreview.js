import React from 'react';

import { useNavigate } from 'react-router-dom';
import Item from '../sectionItem/Item';


const SectionPreview = ({categoryName, items}) => {
  const navigate = useNavigate();

  return(
    <div className='collection-preview'>
      <h2 
        className='category-name'
        style={{cursor: 'pointer'}}
        onClick={() => navigate(`${categoryName.toLowerCase()}`)}
      > {categoryName} </h2>

      <div className='products-list'>
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
};

export default SectionPreview;