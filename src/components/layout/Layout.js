import React from 'react';
import Hoc from '../../hoc/Hoc';
import './Layout.css';

export const Layout = (props) => (
   <Hoc>
      <div>toolbalr, SoidDrower, Backdrop</div>
      <main className='content'>
         {props.children}
      </main>
   </Hoc>
);

export default Layout;