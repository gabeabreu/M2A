/* eslint-disable default-param-last */
import { Reducer } from "redux";
import * as Actions from "./actions";
import { CompaniesState, CompaniesTypes } from "./types";
// import storage from "redux-persist/lib/storage";
// import { persistReducer } from "redux-persist";

const INITIAL_STATE: CompaniesState = {
  loading: false,
  company: null,
  companies: {
    data: null,
    count: null,
  },
};

const reducer: Reducer<CompaniesState> = (
  state = INITIAL_STATE,
  { type, payload }
) => {
  switch (type) {
    // GET COMPANY
    case CompaniesTypes.GET_COMPANY_REQUEST:
      return { ...state, loading: true };

    case CompaniesTypes.GET_COMPANY_SUCCESS:
      return {
        ...state,
        loading: false,
        company: payload.data,
      };

    case CompaniesTypes.GET_COMPANY_FAILURE:
      return { ...state, loading: false };

    // GET COMPANIES
    case CompaniesTypes.GET_COMPANIES_REQUEST:
      return { ...state, loading: true };

    case CompaniesTypes.GET_COMPANIES_SUCCESS:
      return {
        ...state,
        loading: false,
        companies: { data: payload.data, count: payload.count },
      };

    case CompaniesTypes.GET_COMPANIES_FAILURE:
      return { ...state, loading: false };

    // REGISTER COMPANY
    case CompaniesTypes.REGISTER_COMPANY_REQUEST:
      return { ...state, loading: true };

    case CompaniesTypes.REGISTER_COMPANY_SUCCESS:
      return { ...state, loading: false, data: payload.data };

    case CompaniesTypes.REGISTER_COMPANY_FAILURE:
      return { ...state, loading: false };

    // CLEAR DATA
    case CompaniesTypes.CLEAR_DATA:
      return INITIAL_STATE;

    default:
      return state;
  }
};

// const persistConfig = {
//   key: "@M2A/Companies",
//   storage,
// };

export const CompaniesActions = Actions;
// export default persistReducer(persistConfig, reducer);
export default reducer;
