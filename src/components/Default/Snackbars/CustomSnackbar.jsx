import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { closeSnackbar } from '../../../actions/snackbarActions';

import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContentWrapperv1 from './components/SnackbarContentWrapperv1';

const CustomSnackbar = () => {
  const { open } = useSelector(state => state.snackbar);
  const dispatch = useDispatch();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(closeSnackbar());
  };

  return (
    open &&
    <>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <SnackbarContentWrapperv1
          onClose={handleClose}
        />
      </Snackbar>
    </>
  );
}

export default CustomSnackbar;