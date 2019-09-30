import React from 'react';
import HooksExample from './scenes/HooksExample';
import ContextExample from './scenes/ContextExample';
import ContentHooksExample from './scenes/ContextHooksExample';
import ReduxExample from './scenes/ReduxExample';
import ReduxHooksExample from './scenes/ReduxHooksExample';
import ReduxSagaHooksExample from './scenes/ReduxSagaHooksExample';

const App = () => {
  return (
    <>
      <HooksExample/>
      <ContextExample/>
      <ContentHooksExample/>
      <ReduxExample/>
      <ReduxHooksExample/>
      <ReduxSagaHooksExample/>
    </>
  );
};

export default App;