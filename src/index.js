import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import { rootReducer } from "./ducks/todo";

const initalState = {
  item: "",
  items: []
};

const store = createStore(rootReducer, initalState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
