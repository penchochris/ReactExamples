import { call, put, takeLatest } from 'redux-saga/effects';
import { TYPES } from '../consts';

const api = url => fetch(url).then(res => res.json());

export function* fetchName() {
  try {
    const randomName = Math.floor(Math.random() * 10) + 1;
    const values = yield call(api, `https://jsonplaceholder.typicode.com/users/${randomName}`);
    yield put({ type: TYPES.SET_NAME, values });
  } catch (e) {
    console.log('error fetching')
    console.log(e);
  }
}

function* nameSaga() {
  yield takeLatest(TYPES.SET_NAME_SAGA_REQUEST, fetchName);
}

export default nameSaga;