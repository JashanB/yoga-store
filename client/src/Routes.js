import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './components/app/App';
import Login from './components/login/Login';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/login" component={Login} />
    </Switch >
  );
}

