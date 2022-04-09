import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectShopProducts } from '../../redux/shop/shopSelector';
import SectionPreview from '../sectionPreview/SectionPreview';


const Container = styled.div``;

const SectionOverview = ({homePage}) => {
  const products = useSelector(selectShopProducts);

  return(
    <Container>
      {
        products
        .slice(...(homePage ? [0, 3] : [1]))
        .map(({categoryName, items, categoryId, categoryUrl}) => (
          <SectionPreview 
            categoryName={categoryName} 
            items={items} 
            categoryUrl={categoryUrl}
            key={categoryId}/>
        ))
      }
    </Container>
  )
};

export default SectionOverview;