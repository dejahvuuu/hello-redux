import reducer from '../reducers';
import { createStore } from 'redux';

const initialState = { tech: 'Reacts' };
const store = createStore(reducer, initialState);

export default store;
