import React from 'react';

const Person = props => (
   <div>
      {props.name}{'   '}
      {props.age}
   </div>
);

export default Person;