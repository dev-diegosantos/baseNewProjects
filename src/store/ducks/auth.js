import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
  userAuthRequest: ["payload"],
  userAuthSuccess: ["payload", "isLoading"],
  userAuthFail: ["isLoading", "error"],

  resetAuth: [""]
});
const INITIAL_STATE = {
  email: "",
  password: "",
  isLoading: false
};

const resetAuth = () => ({ ...INITIAL_STATE, isLoading: false });

const userAuthRequest = () => ({ ...INITIAL_STATE, isLoading: true });
const userAuthSuccess = (state, payload) => ({
  ...state,
  payload,
  isLoading: false
});
const userAuthFail = (state, error) => ({
  ...state,
  isLoading: false,
  ...error
});

export default createReducer(INITIAL_STATE, {
  [Types.USER_AUTH_REQUEST]: userAuthRequest,
  [Types.USER_AUTH_SUCCESS]: userAuthSuccess,
  [Types.USER_AUTH_FAIL]: userAuthFail,

  [Types.RESET_AUTH]: resetAuth
});
