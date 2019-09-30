import React, { useContext } from 'react';
import { NameContext } from '../../context/nameContext';
import { Formik } from 'formik';

const Form = () => {
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

export default Form;