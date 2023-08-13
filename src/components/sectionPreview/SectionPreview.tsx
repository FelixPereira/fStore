import { Product } from '../../@types/product';
import ProductItem from '../product/Product';

import {
  Container,
  CategoryName,
  ProductsList,
  StyledLink,
} from './sectionPreview-style';

interface SectionPreviewProps {
  categoryName: string;
  items: Product[];
  collectionPage?: boolean;
  productPath?: string;
  categoryUrl?: string;
}

const SectionPreview = ({
  categoryName,
  items,
  collectionPage,
  productPath,
  categoryUrl,
}: SectionPreviewProps) => {
  return (
    <Container>
      <CategoryName>
        <StyledLink to={`${collectionPage ? '' : categoryUrl}`}>
          {categoryName}
        </StyledLink>
      </CategoryName>

      <ProductsList>
        {items.slice(...(collectionPage ? [0] : [0, 5])).map((item) => (
          <ProductItem
            product={item}
            key={item.id}
            categoryUrl={categoryUrl}
            productPath={productPath}
          />
        ))}
      </ProductsList>
    </Container>
  );
};

export default SectionPreview;
