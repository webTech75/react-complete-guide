import React from 'react';
import './modal.css';
import Hoc from '../../../hoc/Hoc';
import Backdrop from '../backdrop/Backdrop';

const modal = props => (
   <Hoc>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div className='Modal'
         style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
         }}>
         {props.children}
      </div>
   </Hoc>
);

export default modal;