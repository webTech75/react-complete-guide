
import * as actionTypes from '../actions';
import { updateObject } from '../utility';

const initialState = {
   results: []
}

const resultReducer = (state = initialState, actions) => {
   switch(actions.type) {
      case actionTypes.STORE_RESULT:
            return updateObject(state, {results: state.results.concat({id: new Date(), value: actions.result})});
      case actionTypes.DELETE_RESULT:
         let updatedResult = state.results.filter(result => {
            return result.id !== actions.id;
         })
         return updateObject(
            state,
            {results: updatedResult}
         );
      default:
         return state;
   }
}

export default resultReducer;