import React from 'react';
import './toolbar.css';
import Logo from '../../logo/Logo';

const toolbar = props => (
   <header className='Toolbar'>
      <div>Menu</div>
      <Logo />
      <nav>
         ...
      </nav>
   </header>
);

export default toolbar;