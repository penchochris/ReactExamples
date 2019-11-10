import { combineReducers } from 'redux';

import { userReducer } from './userReducer';
import { snackbarReducer } from './snackbarReducer';
import { dialogReducer } from './dialogReducer';

const reducers = combineReducers({
  user: userReducer,
  snackbar: snackbarReducer,
  dialog: dialogReducer,
});

export default reducers;