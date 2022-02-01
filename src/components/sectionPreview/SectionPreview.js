import React from 'react';

import './sectionPreview.css';
import SectionItems from '../sectionItems/SectionItems';
import Header from '../header/Header';
import Backdrop from '../backdrop/backdrop';
import PRODUCTS from '../../teste';


const SectionPreview = () => {
  const products = PRODUCTS;
  
  return(
    <div className='sectionsPreview'>
      <Header />
      {
        products
          .filter((product, idx) => idx < 3)
          .map(({categoryName, items}, id) => (
            <SectionItems categoryName={categoryName} items={items} key={id}/>
        ))
      }
    </div>
  )
}

export default SectionPreview;