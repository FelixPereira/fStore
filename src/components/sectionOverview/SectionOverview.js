import React from 'react';
import { useSelector } from 'react-redux';
import { selectShopProducts } from '../../redux/shop/shopSelector';

import SectionPreview from '../sectionPreview/SectionPreview';

const SectionOverview = ({home}) => {
  const products = useSelector(selectShopProducts);

  return(
    <div className='collections-container'>
      {
        products.map(({categoryName, items, categoryId}) => (
          <SectionPreview 
            categoryName={categoryName} 
            items={items} 
            key={categoryId}/>
        ))
      }
    </div>
  )
};

export default SectionOverview;