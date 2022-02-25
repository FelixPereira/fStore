import React from 'react';
import { Outlet } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopProducts } from '../../redux/shop/shopSelector';
import SectionItems from '../../components/sectionItems/SectionItems';

import SectionOverview from '../../components/sectionOverview/SectionOverview';

const ShopPage = ({products}) => {
  return(
    products
    .slice(1)
    .map(({categoryName, items}, id) => (
      <SectionItems  
        categoryName={categoryName} 
        items={items} 
        key={id}  />
    ))
  )
};

const mapStateToProps = createStructuredSelector({
  products: selectShopProducts
});

export default connect(mapStateToProps)(ShopPage);