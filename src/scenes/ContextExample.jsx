import React, {Component} from 'react';

import { withNameProvider } from '../context/nameContext';

import Presentation from '../components/ContextExample/Presentation';
import Form from '../components/ContextExample/Form';

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
