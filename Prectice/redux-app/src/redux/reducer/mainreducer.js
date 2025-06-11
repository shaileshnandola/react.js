import { combineReducers } from "redux";
import counter from "./Counterreducer";
import crudreducers from "./crudreducers";
const rootreducer=combineReducers({
        cnt:counter,
        crud:crudreducers
})

export default rootreducer;
