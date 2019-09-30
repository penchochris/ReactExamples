import { TYPES } from "../consts";

export const setName = values => ({ type: TYPES.SET_NAME, values });
export const setNameSaga = () => ({ type: TYPES.SET_NAME_SAGA_REQUEST });