/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
export enum AccountTypes {
  GET_ACCOUNT_REQUEST = "@general/GET_ACCOUNT_REQUEST",
  GET_ACCOUNT_SUCCESS = "@general/GET_ACCOUNT_SUCCESS",
  GET_ACCOUNT_FAILURE = "@general/GET_ACCOUNT_FAILURE",
}

export interface GetAccount {
  type: AccountTypes.GET_ACCOUNT_REQUEST;
}

export interface GetAccountSuccess {
  type: AccountTypes.GET_ACCOUNT_SUCCESS;
  payload: { data: Profile };
}

export interface GetAccountFailure {
  type: AccountTypes.GET_ACCOUNT_FAILURE;
}

export type AccountActionTypes =
  | GetAccount
  | GetAccountSuccess
  | GetAccountFailure;

export interface AccountState {
  loading: boolean;
  data: Profile | null;
  token: number | null;
}

export interface Profile {
  name: string;
  surname: string;
  email: string;
}
