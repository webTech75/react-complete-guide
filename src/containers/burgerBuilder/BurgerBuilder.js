import React, { Component } from 'react';
import Hoc from '../../hoc/Hoc';
import Burger from '../../components/burger/Burger';
export default class BurgerBuilder extends Component {
   state = {
      ingredients: {
         salad: 0,
         bacon: 0,
         cheese: 0,
         meat: 0
      }
   }
   render() {
      return(
         <Hoc>
            <Burger ingredients={this.state.ingredients} />
            <div>build Controls</div>
         </Hoc>
      )
   }
}