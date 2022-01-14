import { createStore } from 'redux';
import reducer from '../reducers';

const initialState = { tech: 'Alberto' };
export const store = createStore(reducer, initialState);
