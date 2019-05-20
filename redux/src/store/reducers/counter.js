
import * as actionTypes from '../actions';
import { updateObject } from '../utility';

const initialState = {
   counter: 0,
}

const counterReducer = (state = initialState, actions) => {
   switch(actions.type) {
      case actionTypes.INCREMENT:
         return updateObject(state, {counter: state.counter + 1});
      case actionTypes.DECREMENT:
            return updateObject(state, {counter: state.counter - 1});
      case actionTypes.ADD_5:
            return updateObject(state, {counter: state.counter + actions.value});
      case actionTypes.SUBRTACT_5:
            return updateObject(state, {counter: state.counter - actions.value});
      default:
         return state;
   }
}

export default counterReducer;