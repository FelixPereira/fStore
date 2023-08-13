import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectShopProducts } from '../../redux/shop/shopSelector';
import SectionPreview from '../sectionPreview/SectionPreview';

import { PRODUCTS } from '../../../db';

const Container = styled.div``;

interface SectionOverviewProps {
  homePage: boolean;
}

const SectionOverview = ({ homePage }: SectionOverviewProps) => {
  const products = useSelector(selectShopProducts);

  return (
    <Container>
      {PRODUCTS
        // .slice(...(homePage ? [0, 3] : [1]))
        // .map(({ categoryName, items, categoryId, categoryUrl }) => (
        .map((product) => (
          <SectionPreview
            categoryName='Nome da categoria'
            items={PRODUCTS}
            categoryUrl='url-da-categoria'
            key={product.id}
          />
        ))}
    </Container>
  );
};

export default SectionOverview;
