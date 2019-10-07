import { TYPES } from '../consts';

export const setSnackbarOpen = open => ({ type: TYPES.SET_SNACKBAR_OPEN, open });
export const setSnackbar = snackbar => ({ type: TYPES.SET_SNACKBAR, snackbar });