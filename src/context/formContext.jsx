import React, { useState } from "react";

export const FormContext = React.createContext();
export const FormConsumer = FormContext.Consumer;

const Provider = FormContext.Provider;

const FormProvider = ({ children }) => {
  const [context, setContext] = useState({
    name: 'Chris',
  });

  return (
    <Provider value={{ context, setContext }}>
      {children}
    </Provider>
  )
};

export const withFormProvider = Component =>
  function WrapperComponent() {
    return (
      <FormProvider>
        <Component/>
      </FormProvider>
    );
  };

export const withFormConsumer = Component =>
  function WrapperComponent() {
    return (
      <FormConsumer>
        { ({ context, setContext }) =>
          <Component context={context} setContext={setContext}/>
        }
      </FormConsumer>
    )
  }