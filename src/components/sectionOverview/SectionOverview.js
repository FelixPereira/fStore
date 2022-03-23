import React from 'react';
import { useSelector } from 'react-redux';
import { selectShopProducts } from '../../redux/shop/shopSelector';

import SectionPreview from '../sectionPreview/SectionPreview';

const SectionOverview = ({homePage}) => {
  const products = useSelector(selectShopProducts);

  return(
    <div className='collections-container'>
      {
        products
        .slice(...(homePage ? [0, 3] : [1]))
        .map(({categoryName, items, categoryId, categoryUrl}) => (
          <SectionPreview 
            categoryName={categoryName} 
            items={items} 
            categoryUrl={categoryUrl}
            key={categoryId}/>
        ))
      }
    </div>
  )
};

export default SectionOverview;