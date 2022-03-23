import React from 'react';

import { useNavigate, useLocation, Link } from 'react-router-dom';
import Item from '../sectionItem/Item';
import './sectionPreview.css';


const SectionPreview = ({categoryName, items}) => {
  return(
    <div className='collection-preview'>
      <h2 className='category-name' style={{cursor: 'pointer'}}> <Link to={`/loja/${categoryName.toLowerCase()}`}> {categoryName} </Link></h2>

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