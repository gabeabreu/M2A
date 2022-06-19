import { all, fork } from "redux-saga/effects";

import accountSaga from "./account/sagas";
import generalSaga from "./general/sagas";

export default function* rootSaga() {
  yield all([fork(accountSaga), fork(generalSaga)]);
}
