import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopProducts } from '../../redux/shop/shopSelector';

<<<<<<< HEAD
<<<<<<< HEAD
import './sectionPreview.css';

const SectionPreview = ({
  displaySidebar, 
  toggleSidebar, 
  products}) => {
=======
import SectionItems from '../sectionItems/SectionItems';

const SectionPreview = ({products}) => {
>>>>>>> b4ea99f59f83bda5e68354e38d9129f076797003
=======
import SectionItems from '../sectionItems/SectionItems';

const SectionPreview = ({products}) => {
>>>>>>> 777c0449020cb1776297f584fc047af5c05e129e
  return(
    <div className='collections-preview'>
      {
        products
          .filter((product, idx) => idx < 3)
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

const mapStateToProps = createStructuredSelector({
  products: selectShopProducts
});
export default connect(mapStateToProps)(SectionPreview);