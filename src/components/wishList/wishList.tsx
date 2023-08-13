import { useSelector } from 'react-redux';

import { Container, Title, WhishlistItemsContainer } from './wishList-style';

import SmallItem from '../wishList-cart-item/wishList-Cart-item';

const WishList = () => {
  const wishListItems = useSelector(
    ({ wishList: { wishListItems } }) => wishListItems
  );
  return (
    <Container>
      <Title>Lista de desejos</Title>
      <WhishlistItemsContainer>
        {wishListItems
          .filter((wishListItem: any, idx: any) => idx < 10)
          .map((wishListItem: any) => (
            <SmallItem key={wishListItem.id} item={wishListItem} />
          ))}
      </WhishlistItemsContainer>
    </Container>
  );
};

export default WishList;
