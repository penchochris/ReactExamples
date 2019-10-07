import { TYPES } from '../consts';

export const setSnackbarOpen = open => ({
  type: TYPES.SET_SNACKBAR_OPEN,
  open,
});