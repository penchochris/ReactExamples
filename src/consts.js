export const TYPES = {
  SET_NAME: 'SET_NAME',
  SET_NAME_SAGA_REQUEST: 'SET_NAME_SAGA_REQUEST',
  SET_NAME_SAGA_SUCCESS: 'SET_NAME_SUCCESS',
  SET_NAME_SAGA_FAILURE: 'SET_NAME_FAILURE',
  SET_NAME_SAGA_CONFIRM: 'SET_NAME_SAGA_CONFIRM',

  OPEN_SNACKBAR: 'OPEN_SNACKBAR',
  CLOSE_SNACKBAR: 'CLOSE_SNACKBAR',

  OPEN_DIALOG: 'OPEN_DIALOG',
  CLOSE_DIALOG: 'CLOSE_DIALOG',
};

export const SNACKBARS = {
  IMPORT_NAME_ERROR: { variant: 'error', message: 'Error importando nombre aleatorio.' },
  IMPORT_NAME_SUCCESS: { variant: 'success', message: 'El nombre ha sido importado correctamente.' }
};

export const DIALOGS = {
  IMPORT_NAME_DIALOG: {
    title: 'Importar nombre aleatorio',
    message: 'Estas seguro que quieres importar un nuevo nombre aleatorio?',
    accept: 'Aceptar',
    cancel: 'Cancelar',
  }
};