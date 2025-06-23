import { combineReducers } from "redux";
import postReducer from "./postreducers";

const rootreducer = combineReducers({
        posts: postReducer
});

export default rootreducer;
