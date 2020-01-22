import React, { FC, useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { useSignInRedux } from "container/signin";
import Input from "../Input";
import * as S from "../style";
import { ScrollToTop } from "components/common";

const Signin: FC = () => {
  const { push } = useHistory();
  const {
    authReducerState: { loginStatus },
    autoReducerDispatch: { loginAction, resetStatusAction }
  } = useSignInRedux();

  const [loginId, setLoginId] = useState("");
  const [loginPw, setLoginPw] = useState("");

  const loginIdHandler = useCallback((value: string) => {
    setLoginId(value);
  },                                 []);
  const loginPwHandler = useCallback((value: string) => {
    setLoginPw(value);
  },                                 []);

  const login = useCallback(() => {
    loginAction({
      id: loginId,
      password: loginPw
    });
  },                        [loginId, loginPw, loginStatus]);

  const keyDownEnter = useCallback(
    keyCode => {
      if (keyCode === "Enter") {
        login();
      }
    },
    [login]
  );

  useEffect(() => {
    if (loginStatus === 401) {
      alert("입력하신 정보를 옳바르지 않습니다.");
    } else if (loginStatus === 200) {
      alert("로그인 되었습니다!");
      push("/");
    }

    resetStatusAction();
  },        [loginStatus]);

  return (
    <ScrollToTop>
      <S.Wrapper>
        <section>
          <div>
            <S.StructingDiv>
              <h1>LOGIN</h1>
              <Input
                inputId="login_id"
                placeHolder="아이디를 입력하세요"
                value={loginId}
                handler={loginIdHandler}
                keyDown={keyDownEnter}
                type="text"
              />
              <Input
                inputId="login_pw"
                placeHolder="패스워드를 입력하세요"
                value={loginPw}
                handler={loginPwHandler}
                keyDown={keyDownEnter}
                type="password"
              />
              <button onClick={login}>LOGIN</button>
            </S.StructingDiv>
          </div>
        </section>
      </S.Wrapper>
    </ScrollToTop>
  );
};

export default Signin;
