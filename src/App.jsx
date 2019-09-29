import React from 'react';
import HooksExample from './scenes/HooksExample';
import ContextExample from './scenes/ContextExample';
import ContentHooksExample from './scenes/ContextHooksExample';
import ReduxExample from './scenes/ReduxExample';
import ReduxHooksExample from './scenes/ReduxHooksExample';
import {FormProvider} from "./context/formContext";

const App = () => {
  return (
    <>
      <HooksExample/>
      <ContextExample/>
      <ContentHooksExample/>
      <ReduxExample/>
      <ReduxHooksExample/>
    </>
  );
};

export default App;