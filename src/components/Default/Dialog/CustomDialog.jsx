import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNameSaga, setConfirmationSaga } from '../../actions/userActions'

import { DIALOGS } from '../../../consts';
import { openDialog, closeDialog } from '../../../actions/dialogActions';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const CustomDialog = () => {

  const dispatch = useDispatch();
  const { open, title, message, cancel, accept } = useSelector(state => state.dialog);

  const handleClickOpen = () => {
    dispatch(setNameSaga());
  };

  const handleAccept = () => {
    dispatch(setConfirmationSaga());
    dispatch(openDialog(DIALOGS.IMPORT_NAME_DIALOG));
  };

  const handleCancel = () => { dispatch(closeDialog()) };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleCancel}
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="primary">
            {cancel}
          </Button>
          <Button onClick={handleAccept} color="primary">
            {accept}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CustomDialog;
