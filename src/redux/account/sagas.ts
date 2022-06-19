// eslint-disable-next-line no-unused-vars
import { all, call, delay, put, takeLatest } from "redux-saga/effects";
import { AccountActions } from ".";
import { AccountTypes, GetAccount, RegisterAccount } from "./types";
import { customHistory } from "../../routes/CustomBrowserRouter";
import * as api from "../../services/index";
import * as helpers from "../../helpers/index";

function* getAccount({ payload: { data } }: GetAccount) {
  try {
    yield delay(2000);
    console.log("Ran sagas");

    yield getAccountSuccess({
      name: "Vitor",
      surname: "Machado",
      email: "test@email.com",
    });
  } catch (err) {
    yield put(AccountActions.getAccountFailure());
    console.log(err);
  }
}

function* getAccountSuccess(data) {
  yield put(AccountActions.getAccountSuccess(data));
  customHistory.push("/companies");
}

function* registerAccount({ payload: { data } }: RegisterAccount) {
  try {
    const { data: returnData } = yield call(api.account.registerUser, data);

    yield registerAccountSuccess(returnData);
  } catch (err) {
    yield put(AccountActions.registerAccountFailure());
    console.log(err);
  }
}

function* registerAccountSuccess(data) {
  yield put(AccountActions.registerAccountSuccess(data));
  yield put(
    AccountActions.getAccountRequest({
      password: data.password,
      username: data.username,
    })
  );
}

function* generalSaga() {
  yield all([takeLatest(AccountTypes.GET_ACCOUNT_REQUEST, getAccount)]);
  yield all([
    takeLatest(AccountTypes.REGISTER_ACCOUNT_REQUEST, registerAccount),
  ]);
}

export default generalSaga;
