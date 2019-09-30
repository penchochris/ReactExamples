import React, { useContext } from 'react';
import { NameContext } from '../../context/nameContext';

const Text = () => {
  const { context } = useContext(NameContext);
  return <p>Hola, soy {context.name}</p>;
};

export default Text;