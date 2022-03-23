import React from 'react';

import { Link } from 'react-router-dom';
import Item from '../sectionItem/Item';

import './sectionPreview.css';


const SectionPreview = ({categoryName, items, collectionPage}) => {

  return(
    <div className='collection-preview'>
      <h2 className='category-name' > 
        <Link to={`/loja/${categoryName.toLowerCase()}`}> 
          {categoryName} 
        </Link>
      </h2>

      <div className='products-list'>
        {
          items
          .slice(...(collectionPage ? [0] : [0, 5]))
          .map(item => (
            <Item item={item} key={item.id}/>
          ))
        }
      </div>
    </div>
  )
};

export default SectionPreview;