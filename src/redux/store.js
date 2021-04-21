import { createStore, combineReducers } from "redux";
import registerReducer from './reducers/register';


let reducers = combineReducers({
    register: registerReducer,
});
  
let store = createStore(reducers);
  
export default store;