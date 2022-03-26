import React from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectSectionProducts } from '../../redux/shop/shopSelector';
import SectionPreview from '../../components/sectionPreview/SectionPreview';


const CollectionPage = () => {
  const { categoryUrl, productUrl } = useParams();
  const collectionproducts = useSelector(selectSectionProducts(categoryUrl));
  const { categoryName, items } = collectionproducts;

  return(
    <div className='collection-overview'>
      {
        productUrl 
        ? <Outlet />
        : <SectionPreview 
            categoryName={categoryName} 
            items={items} 
            collectionPage />
      }
    </div>
  )
};

export default CollectionPage;