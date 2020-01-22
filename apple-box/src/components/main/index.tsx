import React, { FC, useEffect } from "react";

import * as S from "./style";
import { ScrollToTop } from "components/common";
import Login from "components/autorization/signin";
import { useSignInRedux } from "container/signin";

const Main: FC = () => {
  const {
    authReducerState: { accessToken }
  } = useSignInRedux();

  return (
    <ScrollToTop>
      <S.Wrapper>{accessToken !== "" ?  <div/> : <Login />}</S.Wrapper>
    </ScrollToTop>
  );
};

export default Main;
