const redux = require('redux');
const createStore = redux.createStore;

let initialState = {
   counter: 0,
   name : []
}
//Reducer
const rootReducer = (state = initialState, action) => {
   if(action.type === 'INC_COUNTER') {
      return {
         ...state,
         counter: state.counter + 1
      }
   }
   if(action.type === 'ADD_COUNTER') {
      return {
         ...state,
         name: state.name.concat(action.payload)
      }
   }
   return state;
}

//Store
const store = createStore(rootReducer);
console.log("Store", store.getState());

//Subscription get called when actions is dispached
store.subscribe(() => {
   console.log('Subscription', store.getState())
})


//dispatch action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: "ADD_COUNTER", payload:{name: 'amr', mid: 'hafez'}});
console.log('dispatch', store.getState());




