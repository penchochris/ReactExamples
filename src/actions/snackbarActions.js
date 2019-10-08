import { TYPES } from '../consts';

export const closeSnackbar = () => ({ type: TYPES.SET_SNACKBAR_CLOSE });
export const setSnackbar = snackbar => ({ type: TYPES.SET_SNACKBAR, snackbar });