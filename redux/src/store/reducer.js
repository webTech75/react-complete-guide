
// import * as actionTypes from './actions';

// const initialState = {
//    counter: 0,
//    results: []
// }

// const reducer = (state = initialState, actions) => {
//    switch(actions.type) {
//       case actionTypes.INCREMENT:
//          return {
//             ...state,
//             counter: state.counter + 1
//          }
//       case actionTypes.DECREMENT:
//             return {
//                ...state,
//                counter: state.counter - 1
//             }
//       case actionTypes.ADD_5:
//          return {
//             ...state,
//             counter: state.counter + actions.value
//          }
//       case actionTypes.SUBRTACT_5:
//          return {
//             ...state,
//             counter: state.counter - actions.value
//          }
//       case actionTypes.STORE_RESULT:
//          return {
//             ...state,
//             results: state.results.concat({id: new Date(), value: state.counter})
//          }
//       case actionTypes.DELETE_RESULT:
//          let updatedResult = state.results.filter(result => {
//             return result.id !== actions.id;
//          })
//          return {
//             ...state,
//             results: updatedResult

//          }
//       default:
//          return state;
//    }
// }

// export default reducer;