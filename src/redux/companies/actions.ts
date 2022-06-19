import { action } from "typesafe-actions";
import { CompaniesActionTypes, CompaniesTypes, Company } from "./types";

export function getCompanyRequest(companyId: number): CompaniesActionTypes {
  return action(CompaniesTypes.GET_COMPANY_REQUEST, { companyId });
}

export function getCompanySuccess(data: Company[]): CompaniesActionTypes {
  return action(CompaniesTypes.GET_COMPANY_SUCCESS, { data });
}

export function getCompanyFailure(): CompaniesActionTypes {
  return action(CompaniesTypes.GET_COMPANY_FAILURE);
}

export function getCompaniesRequest(): CompaniesActionTypes {
  return action(CompaniesTypes.GET_COMPANIES_REQUEST);
}

export function getCompaniesSuccess(
  data: Company[],
  count: number
): CompaniesActionTypes {
  return action(CompaniesTypes.GET_COMPANIES_SUCCESS, { data, count });
}

export function getCompaniesFailure(): CompaniesActionTypes {
  return action(CompaniesTypes.GET_COMPANIES_FAILURE);
}

export function registerCompanyRequest(data: Company): CompaniesActionTypes {
  return action(CompaniesTypes.REGISTER_COMPANY_REQUEST, { data });
}

export function registerCompanySuccess(data: Company): CompaniesActionTypes {
  return action(CompaniesTypes.REGISTER_COMPANY_SUCCESS, { data });
}

export function registerCompanyFailure(): CompaniesActionTypes {
  return action(CompaniesTypes.REGISTER_COMPANY_FAILURE);
}

export function clearData(): CompaniesActionTypes {
  return action(CompaniesTypes.CLEAR_DATA);
}