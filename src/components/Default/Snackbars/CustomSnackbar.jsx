import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSnackbarOpen } from '../../../actions/snackbarActions';

import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContentWrapper from './components/SnackbarContentWrapper';

const CustomSnackbar = () => {
  const { open } = useSelector(state => state.snackbar);
  const dispatch = useDispatch();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(setSnackbarOpen(false));
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <SnackbarContentWrapper
          onClose={handleClose}
        />
      </Snackbar>
    </div>
  );
}

export default CustomSnackbar;