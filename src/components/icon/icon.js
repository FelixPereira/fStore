import React from 'react';

import './icon.css';

const Icon = ({Children}) => {
  return(
    <div className='icon-container'>
      {Children}
    </div>
  )
}

export default Icon;