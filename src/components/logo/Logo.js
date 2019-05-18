import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';

import './logo.css';
const logo = props => (
   <div className='Logo'>
      <img src={burgerLogo} alt='My burger' />
   </div>
);

export default logo;