import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSectionProducts } from '../../redux/shop/shopSelector';


const SectionOverview = (props) => {
  const params = useParams();
  console.log(props.match)
  console.log(params)

  return(
   /* sectionProducts.map(product => (
      <div>{product.categoryName}</div>
      )) */
      <div>Ola mundo</div>
  )
};


const mapStateToProps = (state, ownProps) => ({
  sectionProducts: selectSectionProducts(ownProps)(state)
});


export default connect(mapStateToProps)(SectionOverview);