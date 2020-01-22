import {
  LoginRequestType,
  LoginResponseType,
  ApiPayload
} from "data/middleware/api/apiType";

export const SET_TOKEN = "SET_TOKEN" as const;
export const LOGIN = "LOGIN" as const;
export const LOGIN_ASYNC = "LOGIN_ASYNC" as const;
export const LOG_OUT = "LOG_OUT" as const;
export const RESET_STATUS = "RESET_STATUS" as const;

export interface SetToken {
  type: typeof SET_TOKEN;
  payload: {
    accessToken: string;
  };
}

export type LoginType = typeof LOGIN | typeof LOGIN_ASYNC;
export type LoginPayload = LoginRequestType & ApiPayload<LoginResponseType>;
interface Login {
  type: LoginType;
  payload?: LoginPayload;
}

interface ResetStatus {
  type: typeof RESET_STATUS;
}

interface Logout {
  type: typeof LOG_OUT;
}

export type AuthActions = SetToken | Login | ResetStatus | Logout;

export const setToken = (payload: { accessToken: string }): AuthActions => ({
  payload,
  type: SET_TOKEN
});

export const login = (payload: LoginRequestType): AuthActions => ({
  type: LOGIN,
  payload
});

export const resetStatus = (): AuthActions => ({
  type: RESET_STATUS
});

export const logout = (): AuthActions => ({
  type: LOG_OUT
});
