import React from "react";
import { useDispatch } from "react-redux";
import {TYPES} from "../../consts";

const Button = () => {
  const dispatch = useDispatch();
  return <button onClick={ () => dispatch({ type: TYPES.SET_NAME_SAGA_REQUEST })}>Set random name</button>
};

export default Button;