import React, { Component } from "react";
import { withFormConsumer } from "../context/formContext";

class Text extends Component {
  render() {
    return (
      <p>Hola, soy {this.props.context.name}</p>
    )
  }
}

export default withFormConsumer(Text);