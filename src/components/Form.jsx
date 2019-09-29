import React, { Component } from "react";
import { withFormConsumer } from "../context/formContext";
import {Formik} from "formik";

class Form extends Component {
  render() {
    return (
      <Formik
        initialValues={{ name: '' }}
        onSubmit={values => this.props.setContext(values)}
      >
        {props => {
          const {
            values,
            handleChange,
            handleSubmit,
          } = props;
          return (
            <form onSubmit={handleSubmit}>
              <label htmlFor="email" style={{ display: 'block' }}>
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

export default withFormConsumer(Form);