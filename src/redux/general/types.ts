/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
export enum GeneralTypes {
  GET_UF_REQUEST = "@general/GET_UF_REQUEST",
  GET_UF_SUCCESS = "@general/GET_UF_SUCCESS",
  GET_UF_FAILURE = "@general/GET_UF_FAILURE",
}

export interface GetGeneral {
  type: GeneralTypes.GET_UF_REQUEST;
}

export interface GetGeneralSuccess {
  type: GeneralTypes.GET_UF_SUCCESS;
  payload: { data: UF[] };
}

export interface GetGeneralFailure {
  type: GeneralTypes.GET_UF_FAILURE;
}

export type GeneralActionTypes =
  | GetGeneral
  | GetGeneralSuccess
  | GetGeneralFailure;

export interface GeneralState {
  loading: boolean;
  uf: UF[] | null;
}

export interface UF {
  id: number;
  sg_uf: string;
  nome_uf: string;
}
