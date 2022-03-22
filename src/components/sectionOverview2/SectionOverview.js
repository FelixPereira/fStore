import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectSectionProducts } from '../../redux/shop/shopSelector';
import SectionItems from '../sectionOverview/SectionOverview';


const SectionOverview = () => {
  const { categoryUrl } = useParams();
  const collectionproducts = useSelector(selectSectionProducts(categoryUrl));
  
  return(
    <div className='collection-overview'>
      <SectionItems 
        categoryName={collectionproducts.categoryName} 
        items={collectionproducts.items} />
    </div>
  )
};

export default SectionOverview;