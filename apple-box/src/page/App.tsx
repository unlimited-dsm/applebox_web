import React, { FC, useEffect, useRef } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import GlobalStyle from "styles/index";
import { setToken } from "actions/auth";
import { getTokenToStorage } from "utils/stroage";
import { Main } from "container/index";
import { ScrollToTop } from "components/common";

const App: FC = () => {
  const dispatch = useDispatch();
  const didMountRef = useRef(false);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;

      dispatch(
        setToken({
          accessToken: getTokenToStorage("accessToken")
            ? getTokenToStorage("accessToken")
            : ""
        })
      );
    }
  },        [didMountRef]);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        <Route path="/" render={() => <Main />} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
