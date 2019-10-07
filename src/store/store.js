import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from '../reducers';
import nameSaga from '../sagas/nameSaga';

const sagaMiddleware = createSagaMiddleware();

export const Store = createStore(reducers, compose(
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

sagaMiddleware.run(nameSaga);