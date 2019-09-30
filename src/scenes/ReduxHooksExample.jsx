import React  from 'react';
import { Provider } from 'react-redux';
import { Store } from '../store/store';

import Presentation from '../components/ReduxHooksExample/Presentation';
import Form from '../components/ReduxHooksExample/Form';

const ReduxHooksExample = () => {
  return (
    <Provider store={Store}>
      <h1>Redux with Hooks</h1>
      <Presentation/>
      <Form/>
    </Provider>
  );
}

export default ReduxHooksExample;