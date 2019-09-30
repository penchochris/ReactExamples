import React, { Component } from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import { setName } from '../../actions/nameActions';

class Form extends Component {
  render() {
    const { onSubmit } = this.props;
    return (
      <Formik
        initialValues={{ name: '' }}
        onSubmit={onSubmit}
      >
        {props => {
          const {
            values,
            handleChange,
            handleSubmit,
          } = props;
          return (
            <form onSubmit={handleSubmit}>
              <label htmlFor="name" style={{ display: 'block' }}>
                Nombre:
              </label>
              <input
                id="name"
                placeholder="Introduce un nuevo nombre"
                type="text"
                value={values.name}
                onChange={handleChange}
              />

              <button type="submit">
                Submit
              </button>
            </form>
          );
        }}
      </Formik>
    )
  }
}

const mapStateToProps = state => ({
  name: state.name,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: values => dispatch(setName(values.name)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);