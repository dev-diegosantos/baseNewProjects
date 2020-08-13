import { all } from "redux-saga/effects";

import * as AuthSaga from "../saga/authSaga";

function* Sagas() {
  yield all([AuthSaga.watcherSaga()]);
}

export default Sagas;
