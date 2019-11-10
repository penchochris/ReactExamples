import React  from 'react';
import { Provider } from 'react-redux';
import { Store } from '../store/store';

import Presentation from '../components/ReduxHooksExample/Presentation';
import DialogButton from '../components/ReduxSagaHooksExample/DialogButton';
import CustomSnackbar from '../components/Default/Snackbar/CustomSnackbar';

const ReduxSagaExample = () => {
  return (
    <Provider store={Store}>
      <h1>Redux Saga with Hooks</h1>
      <Presentation/>
      <DialogButton/>
      <CustomSnackbar/>
    </Provider>
  );
}

export default ReduxSagaExample;