import React  from 'react';
import { useSelector, useDispatch, Provider } from 'react-redux';
import { setNameSaga } from '../actions/nameActions';
import { Store } from "../store/store";
import {TYPES} from "../consts";

const Text = () => {
  const name = useSelector(state => state.name);
  return (
    <p>Hola, soy {name}</p>
  )
};

const Presentation = () => <Text/>;

const Button = () => {
  const dispatch = useDispatch();
  return <button onClick={ () => dispatch({ type: TYPES.SET_NAME_SAGA_REQUEST })}>Set random name</button>
};

const ReduxSagaExample = () => {
  return (
    <Provider store={Store}>
      <h1>Redux Saga with Hooks</h1>
      <Presentation/>
      <Button/>
    </Provider>
  );
}

export default ReduxSagaExample;