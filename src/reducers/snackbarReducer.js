import { TYPES } from '../consts';

const initialState = {
  open: true,
  variant: 'error',
  message: 'En tus muertos me cago!'
};

export const snackbarReducer = (state = initialState, action) => {

  const getState = key => ({
    ...state,
    [key]: action[key]
  });

  const states = {
    [TYPES.SET_SNACKBAR_OPEN]: getState('open'),
  };

  return states[action.type] || state;
};