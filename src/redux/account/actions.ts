import { action } from "typesafe-actions";
import {
  AccountActionTypes,
  AccountTypes,
  LoginProfile,
  Profile,
  RegisterProfile,
} from "./types";

export function getAccountRequest(data: LoginProfile): AccountActionTypes {
  return action(AccountTypes.GET_ACCOUNT_REQUEST, { data });
}

export function getAccountSuccess(data: Profile): AccountActionTypes {
  return action(AccountTypes.GET_ACCOUNT_SUCCESS, { data });
}

export function getAccountFailure(): AccountActionTypes {
  return action(AccountTypes.GET_ACCOUNT_FAILURE);
}

export function registerAccountRequest(
  data: RegisterProfile
): AccountActionTypes {
  return action(AccountTypes.REGISTER_ACCOUNT_REQUEST, { data });
}

export function registerAccountSuccess(data: Profile): AccountActionTypes {
  return action(AccountTypes.REGISTER_ACCOUNT_SUCCESS, { data });
}

export function registerAccountFailure(): AccountActionTypes {
  return action(AccountTypes.REGISTER_ACCOUNT_FAILURE);
}
