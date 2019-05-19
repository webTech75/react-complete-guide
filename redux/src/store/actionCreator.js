import * as  action from './actions';

export const increment = () => {
   return {
      type: action.INCREMENT

   }
}

export const decrement = () => {
   return {
      type: action.DECREMENT

   }
}

export const add5 = (value) => {
   return {
      type: action.ADD_5,
      value
   }
}

export const subtract5 = (value) => {
   return {
      type: action.SUBRTACT_5,
      value
   }
}

export const storeResult = (result) => {
   return {
      type: action.STORE_RESULT,
      result
   }
}

export const deleteResult = (id) => {
   return {
      type: action.DELETE_RESULT,
      id
   }
}