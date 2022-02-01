import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDisplay } from '../../redux/sidebar/sidebarSelector';

import './sectionPreview.css';
import SectionItems from '../sectionItems/SectionItems';
import Header from '../header/Header';
import Backdrop from '../backdrop/backdrop';
import PRODUCTS from '../../teste';



const SectionPreview = ({displaySidebar}) => {
  const products = PRODUCTS;
  
  return(
    <div className='sectionsPreview'>
      { displaySidebar 
        ? <Backdrop />
        : ''}
      <Header />
      {
        products
          .filter((product, idx) => idx < 3)
          .map(({categoryName, items}, id) => (
            <SectionItems categoryName={categoryName} items={items} key={id}/>
        ))
      }
    </div>
  )
};

const mapStateToProps = createStructuredSelector({
  displaySidebar: selectDisplay
});

export default connect(mapStateToProps)(SectionPreview);