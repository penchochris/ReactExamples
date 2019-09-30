import React, { Component } from 'react';
import { withNameConsumer } from '../../context/nameContext';

class Text extends Component {
  render() {
    return (
      <p>Hola, soy {this.props.context.name}</p>
    )
  }
}

export default withNameConsumer(Text);