// eslint-disable-next-line react/no-typos
import * as  action from './actions';

const increment = () => {
   return {
      type: action.INCREMENT

   }
}

const decrement = () => {
   return {
      type: action.DECREMENT

   }
}

const add5 = (value) => {
   return {
      type: action.ADD_5,
      value
   }
}

const subtract5 = (value) => {
   return {
      type: action.SUBRTACT_5,
      value
   }
}

const storeResult = (result) => {
   return {
      type: action.STORE_RESULT,
      result
   }
}

const deleteResult = (id) => dispatch => {
   setTimeout(() => dispatch(delayResult(id)), 3000);
}

function delayResult(id) {
   return {
      type: action.DELETE_RESULT,
      id
   }
}

export {
   increment,
   decrement,
   add5,
   subtract5,
   storeResult,
   deleteResult
}