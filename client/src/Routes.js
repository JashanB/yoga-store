import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './components/app/App';
import Login from './components/login/Login';

export default function Routes() {
  return (
      <Switch>
        <Route exact path="/" render={() => <App />}>
          {/* <App /> */}
        </Route>
        <Route exact path="/login" render={() => <Login />}>
          {/* <Login /> */}
        </Route>
      </Switch>
  );
}

