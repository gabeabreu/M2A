/* eslint-disable default-param-last */
import { Reducer } from "redux";
import * as Actions from "./actions";
import { AccountState, AccountTypes } from "./types";

const INITIAL_STATE: AccountState = {
  loading: false,
  data: null,
  token: null,
};

const reducer: Reducer<AccountState> = (
  state = INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    case AccountTypes.GET_ACCOUNT_REQUEST:
      return { ...state, loading: true };

    case AccountTypes.GET_ACCOUNT_SUCCESS:
      return { ...state, loading: false, data: payload.data };

    case AccountTypes.GET_ACCOUNT_FAILURE:
      return { ...state, loading: false };

    case AccountTypes.REGISTER_ACCOUNT_REQUEST:
      return { ...state, loading: true };

    case AccountTypes.REGISTER_ACCOUNT_SUCCESS:
      return { ...state, loading: false, data: payload.data };

    case AccountTypes.REGISTER_ACCOUNT_FAILURE:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export const AccountActions = Actions;
export default reducer;
