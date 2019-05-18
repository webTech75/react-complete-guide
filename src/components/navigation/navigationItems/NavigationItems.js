import React from 'react';
import './navigationItems.css';
import NavigationItem from './navigationItem/NavigationItem';

const navigationItems = props => (
   <ul className='NavigationItems'>
      <NavigationItem className='active' link='/'>Burger Builder</NavigationItem>
      <NavigationItem link='/'>Checkout</NavigationItem>
   </ul>
);

export default navigationItems;