import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";
import App from "./App";

// Mount function
const mount = (el, { onNavigate, defaultHistory }) => {
  const history = defaultHistory || createMemoryHistory();

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, el);

  const onParentNavigate = ({ pathname: nextPathname }) => {
    if (nextPathname) {
      history.push(nextPathname);
    }
  };

  return {
    onParentNavigate,
  };
};

// Two scenarios: Development or isolation call immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_marketing-dev-root");

  if (devRoot) mount(devRoot, { defaultHistory: createBrowserHistory() });
}

// Through container and we should export mount
export { mount };
