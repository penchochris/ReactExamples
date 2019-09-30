import React, { useState } from "react";

export const NameContext = React.createContext();
export const NameConsumer = NameContext.Consumer;

const Provider = NameContext.Provider;

const NameProvider = ({ children }) => {
  const [context, setContext] = useState({
    name: 'Chris',
  });

  return (
    <Provider value={{ context, setContext }}>
      {children}
    </Provider>
  )
};

export const withNameProvider = Component =>
  function WrapperComponent() {
    return (
      <NameProvider>
        <Component/>
      </NameProvider>
    );
  };

export const withNameConsumer = Component =>
  function WrapperComponent() {
    return (
      <NameConsumer>
        { ({ context, setContext }) =>
          <Component context={context} setContext={setContext}/>
        }
      </NameConsumer>
    )
  }