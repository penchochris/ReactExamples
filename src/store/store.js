import { createStore } from 'redux';
import { formReducer } from '../reducers/formReducer';

export const Store = createStore(formReducer, { name: 'Chris'});