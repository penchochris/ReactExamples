import { TYPES } from '../consts';

const initialState = {
    name: 'Chris'
};

export const userReducer = (state = initialState, action) => {
  const getState = key => ({
    ...state,
    [key]: action[key]
  });

  const states = {
    [TYPES.SET_NAME]: getState('name'),
    [TYPES.SET_NAME_SAGA_SUCCESS]: getState('name'),
    [TYPES.SET_NAME_SAGA_FAILURE]: state,
  };

  return states[action.type] || state;
};
