import React from "react";
import { useSelector } from "react-redux";

const Text = () => {
  const name = useSelector(state => state.name);
  return (
    <p>Hola, soy {name}</p>
  )
};

export default Text;