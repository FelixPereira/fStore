import React from 'react';

import './backdrop.css';

const Backdrop = ({...props}) => {
  return (
    <div {...props} className='backdrop' />
  )
};



export default Backdrop;