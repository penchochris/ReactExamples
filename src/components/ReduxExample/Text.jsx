import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setName } from '../../actions/userActions';

class Text extends Component {
  render() {
    return (
      <p>Hola, soy {this.props.name}</p>
    )
  }
}

const mapStateToProps = state => ({
  name: state.user.name,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: values => dispatch(setName(values.name)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Text);