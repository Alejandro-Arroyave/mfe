import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import React from "react";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";
import { Router, Route, Switch } from "react-router-dom/cjs/react-router-dom";

const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});

const App = ({ history }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
          <Switch>
            <Route exact path="/auth/signin" component={SignIn} />
            <Route exact path="/auth/signup" component={SignUp} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};

export default App;
