export const TYPES = {
  SET_NAME: 'SET_NAME',
  SET_NAME_SAGA_REQUEST: 'SET_NAME_SAGA_REQUEST',
  SET_NAME_SAGA_SUCCESS: 'SET_NAME_SUCCESS',
  SET_NAME_SAGA_FAILURE: 'SET_NAME_FAILURE',
  SET_NAME_SAGA_CONFIRM: 'SET_NAME_SAGA_CONFIRM',

  SET_SNACKBAR_CLOSE: 'SET_SNACKBAR_CLOSE',
  SET_SNACKBAR: 'SET_SNACKBAR',
};

export const SNACKBARS = {
  IMPORT_NAME_ERROR: { variant: 'error', message: 'Error importando nombre aleatorio.', open: true },
  IMPORT_NAME_SUCCESS: { variant: 'success', message: 'El nombre ha sido importado correctamente.', open: true }
};