// eslint-disable-next-line no-unused-vars
import { all, call, delay, put, takeLatest } from "redux-saga/effects";
import { AccountActions } from ".";
import { AccountTypes, GetAccount, RegisterAccount } from "./types";
import { customHistory } from "../../routes/CustomBrowserRouter";
import * as api from "../../services/index";
import * as helpers from "../../helpers/index";
import showToast from "../../helpers/showToast";

function* getAccount({ payload: { data } }: GetAccount) {
  try {
    const { data: returnData } = yield call(api.account.login, data);

    showToast("Logado com sucesso!", "success");
    yield getAccountSuccess(returnData.user, returnData.access);
  } catch (err) {
    yield put(AccountActions.getAccountFailure());

    showToast(helpers.formErrors.formatError(err), "error");
  }
}

function* getAccountSuccess(data, token) {
  yield put(AccountActions.getAccountSuccess(data, token));
  customHistory.push("/companies");
}

function* registerAccount({ payload: { data } }: RegisterAccount) {
  try {
    yield call(api.account.registerAccount, data);

    showToast("Registrado com sucesso!", "success");
    yield registerAccountSuccess(data);
  } catch (err) {
    yield put(AccountActions.registerAccountFailure());

    showToast(helpers.formErrors.formatError(err), "error");
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

function clearData() {
  showToast("Deslogado com sucesso!");
}

function* generalSaga() {
  yield all([takeLatest(AccountTypes.GET_ACCOUNT_REQUEST, getAccount)]);
  yield all([
    takeLatest(AccountTypes.REGISTER_ACCOUNT_REQUEST, registerAccount),
  ]);
  yield all([takeLatest(AccountTypes.CLEAR_DATA, clearData)]);
}

export default generalSaga;
