import React from 'react';

import Product from '../product/Product';

import { 
  Container,
  CategoryName,
  ProductsList,
  StyledLink } from './sectionPreview-style';


const SectionPreview = ({
  categoryName, 
  items, 
  collectionPage,
  productPath, 
  categoryUrl}) => {
  return(
    <Container>
      <CategoryName> 
        <StyledLink to={`${collectionPage ? '' : categoryUrl}`}> 
          {categoryName} 
        </StyledLink>
      </CategoryName>

      <ProductsList>
        {
          items
          .slice(...(collectionPage ? [0] : [0, 5]))
          .map(item => (
            <Product product={item} 
              key={item.id} 
              categoryUrl={categoryUrl} 
              productPath={productPath} />
          ))
        }
      </ProductsList>
    </Container>
  )
};

export default SectionPreview;