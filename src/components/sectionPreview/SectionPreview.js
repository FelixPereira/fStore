import React from 'react';

import './sectionPreview.css';

import SectionItems from '../sectionItems/SectionItems';
import Header from '../header/Header';

const SectionPreview = () => {
  return(
    <div className='sectionsPreview'>
      <Header />
      <SectionItems />
    </div>
  )
}

export default SectionPreview;