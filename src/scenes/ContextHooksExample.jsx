import React from 'react';

import { withNameProvider } from '../context/nameContext';

import Presentation from '../components/ContextHooksExample/Presentation';
import Form  from '../components/ContextHooksExample/Form';

const ContextHooksExample = () =>
  <>
    <h1>Context with Hooks</h1>
    <Presentation/>
    <Form/>
  </>

export default withNameProvider(ContextHooksExample);