import { TYPES } from '../consts';
import { setOne } from './reducerHelper';

const initialState = {
    name: 'Chris'
};

export const userReducer = (state = initialState, action) => {
  const states = {
    [TYPES.SET_NAME]: setOne('name', state, action),
    [TYPES.SET_NAME_SAGA_SUCCESS]: setOne('name', state, action),
    [TYPES.SET_NAME_SAGA_FAILURE]: state,
  };

  return states[action.type] || state;
};
