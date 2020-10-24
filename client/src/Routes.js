import React from "react";
import { Route, Switch } from "react-router-dom";
import App from './components/app/App';
import Login from './components/login/Login';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
    </Switch>
  );
}
