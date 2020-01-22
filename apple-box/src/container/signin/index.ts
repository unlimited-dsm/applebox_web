import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import Signin from "src/components/autorization/signin";
import { login, resetStatus, logout } from "actions/auth";
import { AppState } from "data/store";
import { LoginRequestType } from "middleware/api/apiType";

interface SelectorType {
  loginStatus: number;
  accessToken: string;
}

export const useSignInRedux = () => {
  const authReducerState = useSelector<AppState, SelectorType>(state => ({
    loginStatus: state.auth.loginStatus,
    accessToken: state.auth.accessToken
  }));

  const dispatch = useDispatch();
  const loginAction = useCallback(
    (data: LoginRequestType) => {
      dispatch(login(data));
    },
    [dispatch]
  );
  const logoutAction = useCallback(() => {
    dispatch(logout());
  },                               [dispatch]);
  const resetStatusAction = useCallback(() => {
    dispatch(resetStatus());
  },                                    [dispatch]);

  const autoReducerDispatch = {
    loginAction,
    resetStatusAction,
    logoutAction
  };

  return { authReducerState, autoReducerDispatch };
};

export default Signin;
