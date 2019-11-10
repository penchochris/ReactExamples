import { TYPES } from '../consts';

export const closeDialog = () => ({ type: TYPES.CLOSE_DIALOG, open: false });
export const openDialog = dialog => ({ type: TYPES.OPEN_DIALOG, dialog, open: true });