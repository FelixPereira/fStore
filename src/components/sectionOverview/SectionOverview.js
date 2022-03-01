import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSectionProducts } from '../../redux/shop/shopSelector';


const SectionOverview = (props) => {
  const { categoryUrl } = useParams();
  const {params} = props;
  params.categoryUrl = categoryUrl;
  console.log(params)

  return(
   /* sectionProducts.map(product => (
      <div>{product.categoryName}</div>
      )) */
      <div>{params.categoryUrl}</div>
  )
};

/*
const mapStateToProps = (state) => ({
  sectionProducts: selectSectionProducts(params.categoryUrl)(state)
});
*/

export default connect()(SectionOverview);