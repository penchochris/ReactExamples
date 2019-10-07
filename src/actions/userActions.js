import { TYPES } from '../consts';

export const setName = name => ({ type: TYPES.SET_NAME, name });
export const setNameSaga = () => ({ type: TYPES.SET_NAME_SAGA_REQUEST });
export const setConfirmationSaga = () => ({ type: TYPES.SET_NAME_SAGA_CONFIRM });