import React from 'react';
import './toolbar.css';
import Logo from '../../logo/Logo';
import NavigationItems from '../navigationItems/NavigationItems';

const toolbar = props => (
   <header className='Toolbar'>
      <div>Menu</div>
      <Logo />
      <nav>
         <NavigationItems />
      </nav>
   </header>
);

export default toolbar;