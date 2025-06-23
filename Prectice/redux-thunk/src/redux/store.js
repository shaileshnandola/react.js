import { applyMiddleware, createStore } from 'redux';
import rootreducer from './reducer/mainreducer';
import { thunk } from 'redux-thunk';

const store = createStore(rootreducer,applyMiddleware(thunk));

export default store;
