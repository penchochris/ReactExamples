import React, { useState, useEffect } from 'react';

const HooksExample = () => {

  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Has pulsado ${count} veces`;
  });

  return (
    <>
      <h1>Hooks</h1>
      <p>Has pulsado el boton {count} veces.</p>
      <button onClick={() => setCount(count + 1 )}>Pulsame!</button>
    </>
  );
};

export default HooksExample;