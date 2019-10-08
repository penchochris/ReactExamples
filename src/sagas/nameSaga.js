import { call, put, take, takeLatest } from 'redux-saga/effects';
import { TYPES, SNACKBARS } from '../consts';

import { setSnackbar } from '../actions/snackbarActions';
import { setName } from '../actions/userActions'

const api = url => fetch(url).then(res => res.json());

export function* fetchName() {
  try {

    yield take(TYPES.SET_NAME_SAGA_CONFIRM);

    const randomId = Math.floor(Math.random() * 10) + 1;
    const values = yield call(api, `https://jsonplaceholder.typicode.com/users/${randomId}`);

    yield put(setName(values.name));
    yield put(setSnackbar(SNACKBARS.IMPORT_NAME_SUCCESS));
  } catch (e) {
    yield put(setSnackbar(SNACKBARS.IMPORT_NAME_ERROR));
  }
}

function* nameSaga() {
  yield takeLatest(TYPES.SET_NAME_SAGA_REQUEST, fetchName);
}

export default nameSaga;