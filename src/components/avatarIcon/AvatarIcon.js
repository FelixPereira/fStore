import React from 'react';

import './avatarIcon.css';
import { ReactComponent as Avatar } from '../../assets/shopping-bag.svg';

const AvatarIcon = () => {
  return(
    <div className='avatarIcon'>
      <Avatar className='avatar' />
    </div>
  )
}

export default AvatarIcon;