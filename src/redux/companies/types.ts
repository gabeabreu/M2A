/* eslint-disable no-shadow */

import { Address } from "../general/types";

/* eslint-disable no-unused-vars */
export enum CompaniesTypes {
  GET_COMPANY_REQUEST = "@companies/GET_COMPANY_REQUEST",
  GET_COMPANY_SUCCESS = "@companies/GET_COMPANY_SUCCESS",
  GET_COMPANY_FAILURE = "@companies/GET_COMPANY_FAILURE",

  GET_COMPANIES_REQUEST = "@companies/GET_COMPANIES_REQUEST",
  GET_COMPANIES_SUCCESS = "@companies/GET_COMPANIES_SUCCESS",
  GET_COMPANIES_FAILURE = "@companies/GET_COMPANIES_FAILURE",

  REGISTER_COMPANY_REQUEST = "@companies/REGISTER_COMPANY_REQUEST",
  REGISTER_COMPANY_SUCCESS = "@companies/REGISTER_COMPANY_SUCCESS",
  REGISTER_COMPANY_FAILURE = "@companies/REGISTER_COMPANY_FAILURE",

  CLEAR_DATA = "@companies/CLEAR_DATA",
}

export interface GetCompany {
  type: CompaniesTypes.GET_COMPANY_REQUEST;
  payload: { companyId: number };
}

export interface GetCompanySuccess {
  type: CompaniesTypes.GET_COMPANY_SUCCESS;
  payload: { data: Company[] };
}

export interface GetCompanyFailure {
  type: CompaniesTypes.GET_COMPANY_FAILURE;
}

export interface GetCompanies {
  type: CompaniesTypes.GET_COMPANIES_REQUEST;
}

export interface GetCompaniesSuccess {
  type: CompaniesTypes.GET_COMPANIES_SUCCESS;
  payload: { data: Company[] };
}

export interface GetCompaniesFailure {
  type: CompaniesTypes.GET_COMPANIES_FAILURE;
}

export interface RegisterCompany {
  type: CompaniesTypes.REGISTER_COMPANY_REQUEST;
  payload: { data: Company };
}

export interface RegisterCompanySuccess {
  type: CompaniesTypes.REGISTER_COMPANY_SUCCESS;
  payload: { data: Company };
}

export interface RegisterCompanyFailure {
  type: CompaniesTypes.REGISTER_COMPANY_FAILURE;
}

export interface ClearData {
  type: CompaniesTypes.CLEAR_DATA;
}

export type CompaniesActionTypes =
  | GetCompany
  | GetCompanySuccess
  | GetCompanyFailure
  | GetCompanies
  | GetCompaniesSuccess
  | GetCompaniesFailure
  | RegisterCompany
  | RegisterCompanySuccess
  | RegisterCompanyFailure
  | ClearData;

export interface CompaniesState {
  loading: boolean;
  company: { data: Company[] | null };
  companies: { data: Company[] | null; count: number | null };
}

export interface Company {
  id: number;
  cnpj: string;
  razao_social: string;
  fantasia: string;
  num_empregados: string;
  dt_ano_inicio: string;
  telefone: string;
  celular?: string;
  inscricao_estadual?: string;
  fax?: string;
  bool_master?: boolean;
  ds_negocio?: string;
  missao?: string;
  visao?: string;
  valores?: string;
  grupo: number;
  segmento: number;
  setor: number;
  tipo_industria: number;
  faturamento: number;
  projeto: number;
  endereco: number | Address;
  valor_arrecadacao: number;
}
