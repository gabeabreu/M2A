// eslint-disable-next-line no-unused-vars
import { all, call, delay, put, takeLatest } from "redux-saga/effects";
import { CompaniesActions } from ".";
import {
  CompaniesTypes,
  Company,
  GetCompanies,
  GetCompany,
  RegisterCompany,
} from "./types";
import { customHistory } from "../../routes/CustomBrowserRouter";
import * as api from "../../services/index";
import * as helpers from "../../helpers/index";
import showToast from "../../helpers/showToast";

function* getCompany({ payload: { companyId } }: GetCompany) {
  try {
    const { data: returnData } = yield call(
      api.companies.getCompany,
      String(companyId)
    );

    yield getCompanySuccess(returnData.user);
  } catch (err) {
    yield put(CompaniesActions.getCompanyFailure());

    showToast(helpers.formErrors.formatError(err), "error");
  }
}

function* getCompanySuccess(data) {
  yield put(CompaniesActions.getCompanySuccess(data));
}

function* getCompanies() {
  try {
    const { data: returnData } = yield call(api.companies.getCompanies);

    yield getCompaniesSuccess(returnData.results, returnData.count);
  } catch (err) {
    yield put(CompaniesActions.getCompaniesFailure());

    showToast(helpers.formErrors.formatError(err), "error");
  }
}

function* getCompaniesSuccess(data: Company[], count: number) {
  yield put(CompaniesActions.getCompaniesSuccess(data, count));
}

function* registerCompany({ payload: { data } }: RegisterCompany) {
  try {
    yield call(api.companies.registerCompany, data);

    showToast("Empresa cadastrada com sucesso!", "success");
    yield registerCompanySuccess(data);
  } catch (err) {
    yield put(CompaniesActions.registerCompanyFailure());

    showToast(helpers.formErrors.formatError(err), "error");
  }
}

function* registerCompanySuccess(data) {
  yield put(CompaniesActions.registerCompanySuccess(data));
}

function clearData() {
  showToast("Deslogado com sucesso!");
}

function* companiesSaga() {
  yield all([takeLatest(CompaniesTypes.GET_COMPANY_REQUEST, getCompany)]);
  yield all([takeLatest(CompaniesTypes.GET_COMPANIES_REQUEST, getCompanies)]);
  yield all([
    takeLatest(CompaniesTypes.REGISTER_COMPANY_REQUEST, registerCompany),
  ]);
  yield all([takeLatest(CompaniesTypes.CLEAR_DATA, clearData)]);
}

export default companiesSaga;
