import { fork, takeLatest, all } from "redux-saga/effects";

import { sagaEntity } from "middleware/sagas";
import { LOGIN, LOGIN_ASYNC, LoginType, LoginPayload } from "actions/auth";
import { loginApi } from "middleware/api";

function* login(action) {
  yield sagaEntity<LoginType, LoginPayload>({
    action,
    api: loginApi,
    type: LOGIN_ASYNC
  });
}

function* watchLogin() {
  yield takeLatest(LOGIN, login);
}

export default function* userSaga() {
  yield all([fork(watchLogin)]);
}
