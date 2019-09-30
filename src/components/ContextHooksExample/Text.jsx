import React, { useContext } from "react";
import { NameContext, withNameConsumer } from "../../context/nameContext";

const Text = () => {
  const { context } = useContext(NameContext);
  return <p>Hola, soy {context.name}</p>;
};

export default withNameConsumer(Text);