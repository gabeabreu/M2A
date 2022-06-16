// eslint-disable-next-line no-unused-vars
import { all, delay, put, takeLatest } from "redux-saga/effects";
import { AccountActions } from ".";
import { AccountTypes } from "./types";

function* getAccount() {
  try {
    yield delay(2000);
    console.log("Ran sagas");
    yield put(
      AccountActions.getAccountSuccess({
        name: "Vitor",
        surname: "Machado",
        email: "test@email.com",
      })
    );
  } catch (err) {
    yield put(AccountActions.getAccountFailure());
    console.log(err);
  }
}

function* generalSaga() {
  yield all([takeLatest(AccountTypes.GET_ACCOUNT_REQUEST, getAccount)]);
}

export default generalSaga;
