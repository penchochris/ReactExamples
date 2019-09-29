import { actions } from '../consts';

export const formReducer = (state = {}, action) =>
  action.type === actions.SET_NAME
    ? {
      ...state,
      name: action.values.name,
    }
    : state;