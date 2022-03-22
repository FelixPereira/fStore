import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectSectionProducts } from '../../redux/shop/shopSelector';


const SectionOverview = () => {
  const { categoryUrl } = useParams();
  const sectionsP = useSelector(selectSectionProducts(categoryUrl));
  console.log(sectionsP);
  
  return(
    <div>{sectionsP.categoryName}</div>
  )
};

export default SectionOverview;