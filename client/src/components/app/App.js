import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  const [state, setState] = useState()
  const divStyle = {
    padding: '177.7778% 5px 5px 5px',
    background: 'rgba(0,0,0,0.03)',
    // border-radius: '8px'
  }
  // const backgroundStyle = {
  //   backgroundImage =
  // }
  useEffect(() => {
    axios.get(`http://localhost:5000/home/calendar`)
    .then(res => {
      console.log(res.data);
    })
  }, []);
  return (
    // <Router>
    // <div>
    //   <h1 className="yoga-logo">Yoga-Me</h1>
    //   {/* <div className="App">
    //     <Switch>
    //       <Route path='/users/:user_id/places/:id' render={(props) => <Place {...props} />} />
    //       <Route path='/users/:id' render={(props) => <Search {...props} />} />
    //     </Switch>
    //   </div> */}

    // {/* </Router> */}
    // </div>
    <div className="App">
      <p>HI</p>
    {/* <img className="logo-img" src="yogalogo.png"></img>
    <img className="main-header-img" src="yogaheader.png"></img>
    <img className="yoga-background-img"src="yoga.png"></img> */}
    </div>
  );
}

export default App;
