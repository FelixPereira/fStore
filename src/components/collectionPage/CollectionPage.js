import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectSectionProducts } from '../../redux/shop/shopSelector';
import Item from '../sectionItem/Item';


const CollectionPage = () => {
  const { categoryUrl } = useParams();
  const collectionproducts = useSelector(selectSectionProducts(categoryUrl));
  
  console.log(collectionproducts)
  return(
    <div className='collection-overview'>
      <h2>{collectionproducts.categoryName}</h2>
      {
        collectionproducts.items.map((item) => (
          <Item item={item} />
        ))
      }
    </div>
  )
};

export default CollectionPage;