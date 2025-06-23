import { combineReducers } from "redux";
import notereducer from "./notereducer";

const rootreducer = combineReducers({
    note: notereducer
})

export default rootreducer;