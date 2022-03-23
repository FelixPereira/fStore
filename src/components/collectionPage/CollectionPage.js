import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectSectionProducts } from '../../redux/shop/shopSelector';
import SectionPreview from '../sectionPreview/SectionPreview';


const CollectionPage = () => {
  const { categoryUrl } = useParams();
  const collectionproducts = useSelector(selectSectionProducts(categoryUrl));
  const { categoryName, items } = collectionproducts;

  return(
    <div className='collection-overview'>
      <SectionPreview categoryName={categoryName} items={items} collectionPage />
    </div>
  )
};

export default CollectionPage;

/*

<h2>{collectionproducts.categoryName}</h2>
      {
        collectionproducts.items.map((item) => (
          <Item item={item} />
        ))
      }
*/