import {
  LOGIN_ASYNC,
  RESET_STATUS,
  LOG_OUT,
  SET_TOKEN,
  AuthActions
} from "data/actions/auth";
import { setTokenToStorage, clearStorage } from "utils/stroage";
import { checkHttpCode } from "utils/checkers";

interface InitialState {
  accessToken: string;
  loginStatus: number;
}

const initialState: InitialState = {
  accessToken: "",
  loginStatus: 0
};

const authReducer = (
  state = initialState,
  action: AuthActions
): InitialState => {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        accessToken: action.payload.accessToken
      };
    case LOGIN_ASYNC:
      {
        const { status } = action.payload;

        if (checkHttpCode(status) === 2) {
          setTokenToStorage("accessToken", action.payload.data.accessToken);
          return {
            ...state,
            loginStatus: 200,
            accessToken: action.payload.data.accessToken
          };
        }
        if (checkHttpCode(status) === 4) {
          return {
            ...state,
            loginStatus: 401
          };
        }
        if (checkHttpCode(status) === 5) {
          return {
            ...state,
            loginStatus: 500
          };
        }
      }
      break;
    case RESET_STATUS:
      return {
        ...state,
        loginStatus: 0
      };
    case LOG_OUT:
      clearStorage();
      return state;
    default:
      return state;
  }
};

export default authReducer;
