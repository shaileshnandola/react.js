import { createStore } from 'redux';
import rootreducer from './reducer/mainreducer';

const store = createStore(rootreducer);

export default store;
