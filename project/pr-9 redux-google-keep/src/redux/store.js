import { createStore } from "redux";
import rootreducer from "./reducers/indexreducer";

const store= createStore(rootreducer)

export default store;