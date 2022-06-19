import { AccountState } from "./account/types";
import { GeneralState } from "./general/types";
export default interface ApplicationState {
  account: AccountState;
  general: GeneralState;
}
