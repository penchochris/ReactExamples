import React, { useContext, useState } from 'react';
import { Formik } from 'formik';

import { NameContext, withNameProvider } from '../context/nameContext';

const FormName = () => {
  const { setContext } = useContext(NameContext);

  return (
    <Formik
      initialValues={{ name: '' }}
      onSubmit={values => setContext(values)}
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

const Text = () => {
  const { context } = useContext(NameContext);
  return <p>Hola, soy {context.name}</p>;
};

const Presentation = () => <Text/>;

const ContextHooksExample = () =>
  <>
    <h1>Context with Hooks</h1>
    <Presentation/>
    <FormName/>
  </>

export default withNameProvider(ContextHooksExample);