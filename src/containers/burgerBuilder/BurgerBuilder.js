import React, { Component } from 'react';
import Hoc from '../../hoc/Hoc';
import Burger from '../../components/burger/Burger';
import BuildControls from '../../components/burger/buildControls/BuildControls';
import Modal from '../../components/ui/modal/Modal';
import OrderSummary from '../../components/burger/orderSummary/OrderSummary';

const INGREDIENT_PRICES = {
   salad: 0.5,
   cheese: 0.4,
   meat: 1.3,
   bacon: 0.7
}
export default class BurgerBuilder extends Component {
   state = {
      ingredients: {
         salad: 0,
         bacon: 0,
         cheese: 0,
         meat: 0
      },
      totalPrice: 4,
      purchasable: false,
      purchasing: false
   }

   updatePurchaseState = (ingredients) => {
      const sum = Object.keys(ingredients)
      .map(igKey => {
         return ingredients[igKey];
      })
      .reduce((sum, el) => {
         return sum + el;
      }, 0);
      this.setState({purchasable: sum > 0});
   }

   addIngredientHandler = type => {
      const oldCount = this.state.ingredients[type];
      const updatedCount = oldCount + 1;
      const updatedIngredients = {...this.state.ingredients};
      updatedIngredients[type] = updatedCount;
      const priceAddition = INGREDIENT_PRICES[type];
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice + priceAddition;
      this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
      this.updatePurchaseState(updatedIngredients);
   }

   removeIngredientHandler = type => {
      const oldCount = this.state.ingredients[type];
      if(oldCount <= 0) return;
      const updatedCount = oldCount - 1;
      const updatedIngredients = {...this.state.ingredients};
      updatedIngredients[type] = updatedCount;
      const priceDeduction = INGREDIENT_PRICES[type];
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice - priceDeduction;
      this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
      this.updatePurchaseState(updatedIngredients);
   }

   purchaseHandler = () => {
      this.setState({purchasing: true})
   }

   purchaseCancelHandler = () => {
      this.setState({
         purchasing: false
      })
   }

   purchaseContinueHandler = () => {
      alert('You continue');
      this.purchaseCancelHandler();
   }
   render() {
      const disabledInfo = {
         ...this.state.ingredients
      }
      for(let key in disabledInfo) {
         disabledInfo[key] = disabledInfo[key] <= 0
      }
      return(
         <Hoc>
            <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
               <OrderSummary
                  ingredients={this.state.ingredients}
                  continue={this.purchaseContinueHandler}
                  cancel={this.purchaseCancelHandler}
                  />
            </Modal>
            <Burger ingredients={this.state.ingredients} />
            <BuildControls
               ingredientAdded={this.addIngredientHandler}
               ingredientRemove={this.removeIngredientHandler}
               disabled={disabledInfo}
               price={this.state.totalPrice}
               purchasable={this.state.purchasable}
               ordered={this.purchaseHandler} />
         </Hoc>
      )
   }
}