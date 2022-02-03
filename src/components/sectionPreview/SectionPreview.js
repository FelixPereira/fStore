import React from 'react';

import SectionItems from '../sectionItems/SectionItems';
import PRODUCTS from '../../teste';


const SectionPreview = ({displaySidebar, toggleSidebar}) => {
  const products = PRODUCTS;
  
  return(
    <div className=''>
      {
        products
          .filter((product, idx) => idx < 3)
          .map(({categoryName, items}, id) => (
            <SectionItems categoryName={categoryName} items={items} key={id}/>
        ))
      }
    </div>
  )
};


export default SectionPreview;