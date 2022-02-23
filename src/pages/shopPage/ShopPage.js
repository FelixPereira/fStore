import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopProducts } from '../../redux/shop/shopSelector';
import SectionItems from '../../components/sectionItems/SectionItems';

const ShopPage = ({products}) => {

  return(
    products.map(({categoryName, items, id}) => (
      <SectionItems  categoryName={categoryName} items={items} key={id}  />
    ))
  )
};

const mapStateToProps = createStructuredSelector({
  products: selectShopProducts
});

export default connect(mapStateToProps)(ShopPage);