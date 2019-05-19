
import * as actionTypes from '../actions';

const initialState = {
   results: []
}

const resultReducer = (state = initialState, actions) => {
   switch(actions.type) {
      case actionTypes.STORE_RESULT:
         return {
            ...state,
            results: state.results.concat({id: new Date(), value: actions.result})
         }
      case actionTypes.DELETE_RESULT:
         let updatedResult = state.results.filter(result => {
            return result.id !== actions.id;
         })
         return {
            ...state,
            results: updatedResult
         }
      default:
         return state;
   }
}

export default resultReducer;