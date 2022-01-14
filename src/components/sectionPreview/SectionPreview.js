import React from 'react';

import './sectionPreview.css';

import SectionItems from '../sectionItems/SectionItems';
import Header from '../header/Header';

import PRODUCTS from '../../teste';


const SectionPreview = () => {
  const products = PRODUCTS;
  
  return(
    <div className='sectionsPreview'>
      <Header />
      {
        products
          .filter((product, idx) => idx < 2)
          .map(({categoryName, items}, id) => (
            <SectionItems categoryName={categoryName} items={items} key={products.id}/>
        ))
      }
    </div>
  )
}

export default SectionPreview;