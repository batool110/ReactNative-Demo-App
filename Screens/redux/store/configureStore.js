// import { createStore, combineReducers } from 'redux';
import countReducer from '../reducers/countReducer';

// const rootReducer = combineReducers(
//     { count: countReducer }
// );

// const configureStore = () => {
//     return createStore(rootReducer);
// }
// export default configureStore;


import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import AllReducers from "../Reducers/CombineReducers";

const store = createStore(countReducer,applyMiddleware(thunk));
export default store;