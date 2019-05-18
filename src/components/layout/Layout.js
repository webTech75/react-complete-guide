import React from 'react';
import Hoc from '../../hoc/Hoc';
import './Layout.css';
import Toolbar from '../navigation/toolbar/Toolbar';

export const Layout = (props) => (
   <Hoc>
      <Toolbar />
      <main className='content'>
         {props.children}
      </main>
   </Hoc>
);

export default Layout;