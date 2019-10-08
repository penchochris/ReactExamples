import { TYPES } from '../consts';
import { setSome } from './reducerHelper';

const initialState = {
  open: false,
  variant: '',
  message: ''
};

export const snackbarReducer = (state = initialState, action) => {
  const states = {
    [TYPES.SET_SNACKBAR_CLOSE]: setSome(initialState, state),
    [TYPES.SET_SNACKBAR]: setSome(action.snackbar, state),
  };

  return states[action.type] || state;
};