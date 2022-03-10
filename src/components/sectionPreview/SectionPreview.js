import React from 'react';

import SectionItems from '../sectionItems/SectionItems';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopProducts } from '../../redux/shop/shopSelector';

import './sectionPreview.css';

const SectionPreview = ({
  displaySidebar, 
  toggleSidebar, 
  products}) => {
  return(
    <div className='collections-preview'>
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

const mapStateToProps = createStructuredSelector({
  products: selectShopProducts
});
export default connect(mapStateToProps)(SectionPreview);