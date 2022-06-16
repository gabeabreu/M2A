import { action } from "typesafe-actions";
import { AccountActionTypes, AccountTypes, Profile } from "./types";

export function getAccountRequest(): AccountActionTypes {
  return action(AccountTypes.GET_ACCOUNT_REQUEST);
}

export function getAccountSuccess(data: Profile): AccountActionTypes {
  return action(AccountTypes.GET_ACCOUNT_SUCCESS, { data });
}

export function getAccountFailure(): AccountActionTypes {
  return action(AccountTypes.GET_ACCOUNT_FAILURE);
}
