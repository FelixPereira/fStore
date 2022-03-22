import React from 'react';

import { useSelector } from 'react-redux';
import { selectShopProducts } from '../../redux/shop/shopSelector';

import SectionItems from '../sectionItems/SectionItems';

const SectionPreview = () => {
  const products = useSelector(selectShopProducts)

  return(
    <div className='collections-preview'>
      {
        products
          .slice(0, 3)
          .map(({categoryName, items}, id) => (
            <SectionItems 
              categoryName={categoryName} 
              items={items} 
              key={id} />
        ))
      }
    </div>
  )
};

export default SectionPreview;