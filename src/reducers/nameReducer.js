import { TYPES } from '../consts';

export const nameReducer = (state = {}, action) =>
  action.type === TYPES.SET_NAME
    ? {
      ...state,
      name: action.values.name,
    }
    : state;