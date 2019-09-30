import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { Store } from '../store/store';

import Form from '../components/ReduxExample/Form';
import Presentation from '../components/ReduxExample/Presentation'

class ReduxExample extends Component {
  render() {
    return (
      <Provider store={Store}>
        <h1>Redux</h1>
        <Presentation/>
        <Form/>
      </Provider>
    );
  }
}

export default ReduxExample;