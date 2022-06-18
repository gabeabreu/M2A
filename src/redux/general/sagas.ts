// eslint-disable-next-line no-unused-vars
import { all, call, delay, put, takeLatest } from "redux-saga/effects";
import { GeneralActions } from ".";
import { GeneralTypes } from "./types";
import * as api from "../../services/index";

function* getUf() {
  try {
    console.log("Ran sagas");
    const data = yield call(api.general.getUf);
    console.log(data);
    // yield put(
    //   AccountActions.getUfSuccess({
    //     name: "Vitor",
    //     surname: "Machado",
    //     email: "test@email.com",
    //   })
    // );
  } catch (err) {
    // yield put(AccountActions.getUfFailure());
    console.log(err);
  }
}

function* generalSaga() {
  yield all([takeLatest(GeneralTypes.GET_UF_REQUEST, getUf)]);
}

export default generalSaga;
