import React  from 'react';
import { Provider } from 'react-redux';
import { Store } from "../store/store";

import Presentation from '../components/ReduxHooksExample/Presentation';
import Button from '../components/ReduxSagaHooksExample/Button';


const ReduxSagaExample = () => {
  return (
    <Provider store={Store}>
      <h1>Redux Saga with Hooks</h1>
      <Presentation/>
      <Button/>
    </Provider>
  );
}

export default ReduxSagaExample;