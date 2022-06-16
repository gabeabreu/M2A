import { all, fork } from "redux-saga/effects";

import accountSaga from "./account/sagas";

export default function* rootSaga() {
  yield all([fork(accountSaga)]);
}
