import React, {Component} from 'react';
import { connect, Provider } from 'react-redux';
import { Formik } from 'formik';
import { setName } from "../actions/formActions";
import { Store } from "../store/store";

class Text extends Component {
  render() {
    return (
      <p>Hola, soy {this.props.name}</p>
    )
  }
}

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
  onSubmit: values => dispatch(setName(values)),
});

const ConnectedText = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Text);

const ConnectedForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);

const Presentation = () => <ConnectedText/>

class ReduxExample extends Component {
  render() {
    return (
      <Provider store={Store}>
        <h1>Redux</h1>
        <Presentation/>
        <ConnectedForm/>
      </Provider>
    );
  }
}

export default ReduxExample;