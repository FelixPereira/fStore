import React from 'react';
import { connect } from 'react-redux';

import {
  Container,
  Title,
  WhishlistItemsContainer } from './wishList-style';

import SmallItem from '../wishList-cart-item/wishList-Cart-item';

const WishList = ({wishListItems}) => {
  return(
    <Container>
      <Title>Lista de desejos</Title>
      <WhishlistItemsContainer>
        {
          wishListItems
          .filter((wishListItem, idx) => idx < 10)
          .map(wishListItem => (
            <SmallItem key={wishListItem.id} item={wishListItem}/>
          ))
        }
      </WhishlistItemsContainer>
    </Container>
  )
}

const mapStateToProps = ({wishList: {wishListItems}}) => ({
  wishListItems: wishListItems
});

export default connect(mapStateToProps)(WishList);