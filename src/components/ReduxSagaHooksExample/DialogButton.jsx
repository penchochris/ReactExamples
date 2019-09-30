import React from 'react';
import { useDispatch } from 'react-redux';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { TYPES } from '../../consts';


const DialogButton = () => {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    dispatch({ type: TYPES.SET_NAME_SAGA_REQUEST });
    setOpen(true);
  };

  const handleAccept = () => {
    dispatch({ type: TYPES.SET_NAME_SAGA_CONFIRM });
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <div>
      <button onClick={handleClickOpen}>
        Nombre aleatorio
      </button>
      <Dialog
        open={open}
        onClose={handleCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Importar nombre aleatorio</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Estas seguro que quieres importar un nuevo nombre aleatorio?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleAccept} color="primary" autoFocus>
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DialogButton;
