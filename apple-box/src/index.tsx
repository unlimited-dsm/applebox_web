import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import App from "./page/App";
import { store } from "data/store";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
