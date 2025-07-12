
import { combineReducers } from "redux";
import authReducer from "./Authreducer";

const rootReducer = combineReducers({
  auth: authReducer, 
});

export default rootReducer;
