import React from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';

import { setName } from '../../actions/nameActions';

const Form = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: '' }}
      onSubmit={values => dispatch(setName(values.name))}
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