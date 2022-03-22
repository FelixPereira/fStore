import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopProducts } from '../../redux/shop/shopSelector';

import SectionItems from '../sectionOverview/SectionOverview';

const ShopItems = ({products}) => {
  return(
    <div className='collections-preview'>
      {
        products
          .slice(1)
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
export default connect(mapStateToProps)(ShopItems);