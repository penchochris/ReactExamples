import React  from 'react';
import { useSelector, useDispatch, Provider } from 'react-redux';
import { Formik } from 'formik';
import { setName } from "../actions/formActions";
import { Store } from "../store/store";

const Text = () => {
  const name = useSelector(state => state.name);
  return (
    <p>Hola, soy {name}</p>
  )
};

const Presentation = () => <Text/>;

const Form = () => {

  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: '' }}
      onSubmit={values => dispatch(setName(values))}
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
};

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