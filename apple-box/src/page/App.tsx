import React, { FC, useEffect, useRef } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import GlobalStyle from "styles/index";
import { Main } from "container/index";

const App: FC = () => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (!didMountRef.current) {
      didMountRef.current = true;
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
