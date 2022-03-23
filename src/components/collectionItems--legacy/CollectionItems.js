import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopProducts } from '../../redux/shop/shopSelector';

import Item from '../sectionItem/Item';
import './collectionItems.css';

const ShopItems = (categoryName) => {
  return(
    <div className='collections-preview'>
      <h2 className='category-name' > 
        <Link to={`/loja/${categoryName.toLowerCase()}`}> 
          {categoryName} 
        </Link>
      </h2>

      <div className='products-list'>
        {
          items
          .filter((items, idx) => idx < 5 )
          .map(item => (
            <Item item={item} key={item.id}/>
          ))
        }
      </div>
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  products: selectShopProducts
});
export default connect(mapStateToProps)(ShopItems);