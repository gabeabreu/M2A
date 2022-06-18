import { action } from "typesafe-actions";
import { GeneralActionTypes, GeneralTypes, UF } from "./types";

export function getUfRequest(): GeneralActionTypes {
  return action(GeneralTypes.GET_UF_REQUEST);
}

export function getUfSuccess(data: UF[]): GeneralActionTypes {
  return action(GeneralTypes.GET_UF_SUCCESS, { data });
}

export function getUfFailure(): GeneralActionTypes {
  return action(GeneralTypes.GET_UF_FAILURE);
}
