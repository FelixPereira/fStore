import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSectionProducts } from '../../redux/shop/shopSelector';


const SectionOverview = (props) => {
  console.log(props.match)

  return(
   /* sectionProducts.map(product => (
      <div>{product.categoryName}</div>
      )) */
      <div>''</div>
  )
};

/*
const mapStateToProps = (state) => ({
  sectionProducts: selectSectionProducts(params.categoryUrl)(state)
});
*/

export default connect()(SectionOverview);