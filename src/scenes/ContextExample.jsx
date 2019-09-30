import React, {Component} from 'react';

import { withNameProvider } from '../context/nameContext';

import Text from '../components/Text';
import Form from '../components/Form';

const Presentation = () => <Text/>

class ContextExample extends Component {
  render() {
    return (
      <div>
        <h1>Context</h1>
        <Presentation/>
        <Form/>
      </div>
    );
  }
}

export default withNameProvider(ContextExample);
