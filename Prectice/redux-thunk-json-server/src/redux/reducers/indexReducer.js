import { combineReducers } from "redux";
import crudreducer from "./crudReducer";

const rootreducer = combineReducers({
    crud: crudreducer
})

export default rootreducer;