import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSectionProducts } from '../../redux/shop/shopSelector';


const SectionOverview = ({sectionProducts}, props) => {
  console.log(props)

  return(
   /* sectionProducts.map(product => (
      <div>{product.categoryName}</div>
      )) */
      <div>ola</div>
  )
};

/*
const mapStateToProps = (state) => ({
  sectionProducts: selectSectionProducts(params.categoryUrl)(state)
});
*/

export default connect()(SectionOverview);