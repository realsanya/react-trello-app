import { createStore, combineReducers } from "redux";
import authReducer from "./reducers/auth";
import registerReducer from './reducers/register';


let reducers = combineReducers({
    register: registerReducer,
    auth: authReducer,
});
  
let store = createStore(reducers);
  
export default store;