import { createStore, combineReducers } from "redux";
import authReducer from "./reducers/auth";
import dataReducer from "./reducers/data";
import registerReducer from './reducers/register';
import taskReducer from './reducers/task';


let reducers = combineReducers({
    register: registerReducer,
    auth: authReducer,
    data: dataReducer,
    task: taskReducer,
});
  
let store = createStore(reducers);
  
export default store;