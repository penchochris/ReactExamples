import { TYPES } from '../consts';

export const nameReducer = (state = {}, action) => {

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
