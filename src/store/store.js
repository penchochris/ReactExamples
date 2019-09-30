import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { nameReducer } from '../reducers/nameReducer';
import nameSaga from "../sagas/nameSaga";

const sagaMiddleware = createSagaMiddleware();

export const Store = createStore(nameReducer, { name: 'Chris'}, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(nameSaga);