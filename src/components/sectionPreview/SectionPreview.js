import React from 'react';

import { Link } from 'react-router-dom';
import Item from '../sectionItem/Item';

import './sectionPreview.css';


const SectionPreview = ({
  categoryName, 
  items, 
  collectionPage, 
  categoryUrl}) => {

  return(
    <div className='collection-preview'>
      <h2 className='category-name' > 
        <Link to={`${collectionPage ? '' : categoryUrl}`}> 
          {categoryName} 
        </Link>
      </h2>

      <div className='products-list'>
        {
          items
          .slice(...(collectionPage ? [0] : [0, 5]))
          .map(item => (
            <Item item={item} key={item.id} categoryUrl={categoryUrl} />
          ))
        }
      </div>
    </div>
  )
};

export default SectionPreview;