import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <h1 className="yoga-logo">Yoga-Me</h1>
      <div className="App">
        <Switch>
          <Route path='/users/:user_id/places/:id' render={(props) => <Place {...props} />} />
          <Route path='/users/:id' render={(props) => <Search {...props} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
