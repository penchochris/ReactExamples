import { TYPES } from '../consts';
import { setSome, setOne } from './reducerHelper';

const initialState = {
  open: false,
  title: '',
  message: '',
};

export const dialogReducer = (state = initialState, action) => {
  const states = {
    [TYPES.OPEN_DIALOG]: setOne('open', state, action),
    [TYPES.CLOSE_DIALOG]: setSome(action.dialog, state),
  };

  return states[action.type] || state;
};