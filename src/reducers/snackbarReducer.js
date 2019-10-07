import { TYPES } from '../consts';
import { setSome, setOne } from "./reducerHelper";

const initialState = {
  open: false,
  variant: '',
  message: ''
};

export const snackbarReducer = (state = initialState, action) => {
  const states = {
    [TYPES.SET_SNACKBAR_OPEN]: setOne('open', state, action),
    [TYPES.SET_SNACKBAR_MESSAGE]: setOne('message', state, action),
    [TYPES.SET_SNACKBAR_VARIANT]: setOne('variant', state, action),
    [TYPES.SET_SNACKBAR]: setSome(action.snackbar, state),
  };

  return states[action.type] || state;
};