import React from 'react';
import { useSelector } from 'react-redux';
import { selectShopProducts } from '../../redux/shop/shopSelector';

import SectionPreview from '../sectionPreview/SectionPreview';

const SectionOverview = () => {
  const products = useSelector(selectShopProducts);
  products.map(a => console.log(a))

  return(
    <div className='category-preview'>
      {
        products.map(({categoryName, categoryUrl, items, categoryId}) => (
          <SectionPreview categoryName={categoryName} items={items} key={categoryId}/>
        ))
      }
    </div>
  )
}

export default SectionOverview;