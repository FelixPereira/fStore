import React from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectSectionProducts } from '../../redux/shop/shopSelector';
import SectionPreview from '../../components/sectionPreview/SectionPreview';


const CollectionPage = () => {
  const { categoryUrl, productUrl } = useParams();
  const collectionproducts = useSelector(selectSectionProducts(categoryUrl));
  const { categoryName, items } = collectionproducts;
  const {pathname} = useLocation();
  const productPath = pathname.split('/').filter(path => path !== 'undefined').join('/')

  return(
    <div className='collection-overview'>
      {
        productUrl 
        ? <Outlet />
        : <SectionPreview 
            categoryName={categoryName} 
            items={items}
            productPath={productPath} 
            collectionPage />
      }
    </div>
  )
};

export default CollectionPage;